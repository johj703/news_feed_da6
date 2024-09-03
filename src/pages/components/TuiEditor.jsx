import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';
import { useContext, useEffect, useRef } from 'react';
import { supabase } from '../../supabase/supabase';
import { UserContext } from '../../context/UserConext';

const toolbar = [['heading', 'bold', 'italic', 'strike'], ['hr', 'quote', 'ul', 'ol'], ['image']];
const TuiEditor = ({ setPost, post }) => {
  const { user } = useContext(UserContext);
  const editorRef = useRef();
  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(post.content || ''); // post.contents가 없을 때 기본값을 빈 문자열로 설정
    }
  }, [post.content]);
  const handleEditorChange = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownData = editorInstance.getMarkdown();

    setPost({ ...post, content: markdownData });
  };

  const handleImage = async (file, callback) => {
    const { data, error } = await supabase.storage.from('post').upload(`${user.email}/${Date.now()}`, file);
    callback(`https://kunfsmlsnsixsdzskbmx.supabase.co/storage/v1/object/public/${data.fullPath}`);
    if (error) {
      return;
    }
  };

  return (
    <Editor
      initialValue={post.content ?? ''}
      previewStyle="vertical"
      initialEditType="markdown"
      autofocus={false}
      ref={editorRef}
      toolbarItems={toolbar}
      hideModeSwitch
      height="500px"
      hooks={{ addImageBlobHook: handleImage }}
      onChange={handleEditorChange}
    />
  );
};

export default TuiEditor;

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';
import { useRef } from 'react';
import { supabase } from '../../supabase/supabase';
import { usePost } from '../../hooks/usePost';

const toolbar = [['heading', 'bold', 'italic', 'strike'], ['hr', 'quote', 'ul', 'ol'], ['image']];
const email = 'cj8928@gmail.com';
const TuiEditor = ({ setPost, post }) => {
  const editorRef = useRef();
  const { postData } = usePost();

  const handleEditorChange = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownData = editorInstance.getMarkdown();

    setPost({ ...post, contents: markdownData });
  };

  const handleImage = async (file, callback) => {
    const { data, error } = await supabase.storage.from('post').upload(`${email}/${Date.now()}`, file);
    callback(`https://kunfsmlsnsixsdzskbmx.supabase.co/storage/v1/object/public/${data.fullPath}`);
    if (error) {
      return;
    }
  };

  return (
    <Editor
      initialValue={postData.content ?? ' '}
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

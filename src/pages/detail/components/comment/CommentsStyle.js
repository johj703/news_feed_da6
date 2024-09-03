import styled from 'styled-components';

export const CommentsContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CommentsListContainer = styled.div`
  border-bottom: 3px solid #36474f;
  padding: 10px 24px;
  min-height: 100px;
`;

export const CommentsItemBox = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentTitle = styled.h2`
  border-bottom: 3px solid #36474f;
  padding-bottom: 20px;
`;

export const CommentProfile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 70%;
  overflow: hidden;
`;

export const CommentProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const CommentInfo = styled.span`
  padding-right: 10px;
  font-size: 12px;
`;

export const CommentInputForm = styled.form`
  width: 100%;
  margin-top: ${(props) => (props.isUpdate ? '20px' : '')};
  position: relative;
  display: inline-block;
`;

export const CommentInput = styled.input`
  width: 100%;
  height: ${(props) => (props.isUpdate ? '70px' : '100px')};
  padding-left: 20px;
  padding-right: 180px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 3px solid #407221;
  &:focus {
    outline: none;
  }
`;

export const CommentInputButton = styled.button`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: ${(props) => (props.isUpdate ? '110px' : '120px')};
  height: ${(props) => (props.isUpdate ? '50px' : '80px')};
  border: none;
  color: white;
  border-radius: 8px;
  background-color: #36474f;
  cursor: pointer;
  padding: 0 10px;
`;

export const CommentLastInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentModifyButton = styled.span`
  cursor: pointer;
  padding: 0 10px;
  font-size: 12px;
`;

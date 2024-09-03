import styled from 'styled-components';

export const CommentsContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
  > li:last-child {
    margin-bottom: 60px;
    @media (max-width: 780px) {
      margin-bottom: 40px;
    }
  }
`;

export const CommentsListContainer = styled.li`
  border-bottom: 1px solid #36474f;
  padding: 24px;

  @media (max-width: 780px) {
    padding: 16px;
  }
`;

export const CommentsItemBox = styled.div`
  display: flex;
`;

export const CommentTitle = styled.h2`
  border-bottom: 3px solid #36474f;
  padding-bottom: 20px;
  @media (max-width: 780px) {
    font-size: 22px;
  }
`;

export const CommentProfile = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
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
  gap: 8px;
  padding-left: 24px;
  > span {
    font-size: 18px;
  }
`;

export const CommentInfo = styled.span`
  font-size: 14px;
  &:empty {
    display: none;
  }
`;

export const CommentInputForm = styled.form`
  width: 100%;
  margin-top: ${(props) => (props.$isUpdate ? '20px' : '')};
  position: relative;
  display: inline-block;
`;

export const CommentInput = styled.input`
  width: 100%;
  height: ${(props) => (props.$isUpdate ? '70px' : '80px')};
  padding-left: 20px;
  padding-right: 180px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 3px solid #407221;
  &:focus {
    outline: none;
  }
  @media (max-width: 780px) {
    height: ${(props) => (props.$isUpdate ? '62px' : '72px')};
    padding-right: 100px;
  }
`;

export const CommentInputButton = styled.button`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: ${(props) => (props.$isUpdate ? '110px' : '120px')};
  height: ${(props) => (props.$isUpdate ? '50px' : '50px')};
  border: none;
  color: white;
  border-radius: 8px;
  background-color: #36474f;
  cursor: pointer;
  padding: 0 10px;

  @media (max-width: 780px) {
    right: 24px;
    width: ${(props) => (props.$isUpdate ? '60px' : '80px')};
    height: ${(props) => (props.$isUpdate ? '36px' : '42px')};
  }
`;

export const CommentLastInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  > div {
    display: flex;
    gap: 12px;
    @media (max-width: 780px) {
      gap: 8px;
    }
  }
`;

export const CommentModifyButton = styled.span`
  display: flex;
  justify-content: center;
  width: 60px;
  line-height: 30px;
  border-radius: 4px;
  background: #407221;
  color: #fff;
  box-sizing: border-box;
  cursor: pointer;

  + span {
    background-color: #36474f;
  }
`;

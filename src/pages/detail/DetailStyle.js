import styled from 'styled-components';

export const DetailContainer = styled.div`
  margin-top: 80px;
  @media (max-width: 780px) {
    margin-top: 60px;
  }
`;

export const ViewContainer = styled.div`
  width: 100%;
  padding-bottom: 24px;
  margin-bottom: 80px;
  border-bottom: 1px solid #36474f;
  @media (max-width: 780px) {
    margin-bottom: 60px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  border-bottom: 3px solid #36474f;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px 16px;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin: 0;
  @media (max-width: 780px) {
    font-size: 28px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 8px;
  justify-content: flex-end;
  > span:empty {
    display: none;
  }
`;

export const ContentArea = styled.div`
  padding: 0 8px;
  margin-bottom: 40px;

  .toastui-editor-contents p {
    @media (max-width: 780px) {
      font-size: 18px;
    }
  }
`;

export const BookMark = styled.div`
  cursor: pointer;
  img {
    height: 42px;
    @media (max-width: 780px) {
      height: 36px;
    }
  }
`;

export const ModifyButton = styled.button`
  width: 80px;
  height: 42px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.$bgcolor === 'modify' ? '#407221' : '#36474F')};
  color: white;
  float: right;
  cursor: pointer;

  @media (max-width: 780px) {
    width: 60px;
    height: 36px;
  }
`;

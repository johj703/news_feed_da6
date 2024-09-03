import styled from 'styled-components';

export const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ViewContainer = styled.div`
  width: 900px;
  padding: 10px 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  border-bottom: 3px solid #36474f;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Title = styled.h1`
  font-size: 52px;
  margin: 0;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  justify-content: flex-end;
`;

export const ModifyButton = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.bgcolor === 'modify' ? '#407221' : '#36474F')};
  color: white;
  float: right;
  cursor: pointer;
`;

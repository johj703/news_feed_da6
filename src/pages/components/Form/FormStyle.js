import styled from 'styled-components';
export const FormContainer = styled.form`
  margin: 40px auto 0;
`;
export const RegisterButton = styled.button`
  margin-top: 10px;
  float: right;
  width: 170px;
  height: 50px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => (props.bgcolor === 'modify' ? '#36474F' : '#407221')};
  color: white;
  cursor: pointer;
  @media (max-width: 780px) {
    flex: 1;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 65px;
  margin: 10px 0;
  border: 1px solid #dadde6;
  border-radius: 4px;
  padding: 0 20px;
  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`;

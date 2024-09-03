import styled from 'styled-components';
export const FormContainer = styled.form`
  width: 80%;
  margin: 0 auto;
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
  gap: 20px;
`;

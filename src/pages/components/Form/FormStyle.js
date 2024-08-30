import styled from 'styled-components';
export const FormContainer = styled.form`
  width: 80%;
  margin: 0 auto;
`;
export const RegisterButton = styled.button`
  margin: 10px;
  float: right;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 30px;
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
`;

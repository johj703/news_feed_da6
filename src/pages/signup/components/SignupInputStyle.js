import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 800px; /* 너비를 600px로 확장 */
  width: 92%;
  margin-top: 500px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    color: #608a46;
  }
`;

export const BackButton = styled.button`
  font-size: 20px;
  color: #608a46;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #1a7f00;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  span {
    font-size: 14px;
    margin-bottom: 5px;
    color: #333;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;

    &:focus {
      border-color: #2db400;
    }
  }
`;

export const ErrorBox = styled.div`
  color: red;
  font-size: 12px;
  height: 15px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const SigninButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #608a46;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #608a46;
  }
`;

import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 800px; /* 너비를 600px로 확장 */
  width: 92%;
  margin: 80px auto 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0 40px;

  h1 {
    margin: 0;
    font-size: 24px;
    line-height: 1.25;
    color: #608a46;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  img {
    height: 28px;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div + div {
    margin-top: 15px;
  }
  span {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 12px;
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
  margin: 0 !important;

  p:empty {
    margin: 0;
  }
  p {
    margin: 8px 0 0;
  }
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
  margin-top: 40px;
  transition: 0.3s;

  &:hover {
    background-color: #407221;
  }
`;

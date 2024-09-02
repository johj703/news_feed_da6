import styled from 'styled-components';

export const FormContainer = styled.div`
  padding-right: 500px;
  padding-top: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-bottom: 70px;
  }
  img {
    position: absolute;
    left: 1200px;
    top: 350px;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;

    span {
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
    }
  }

  input {
    font-size: 26px;
    width: 400px;
    border: 1px solid #b4b4b4;
    border-radius: 5px;
    margin-bottom: 5px;
  }
`;

export const ErrorBox = styled.div`
  color: red;
  font-size: 12px;
  justify-content: center;
`;

export const SigninButton = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 25px;
  background-color: #407221;
  color: white;
  padding: 10px;
  width: 95%;
  margin-left: 25px;
  cursor: pointer;
`;

export const BackButton = styled.button`
  font-size: 50px;
  font-weight: bold;
  background-color: white;
  border: none;
  margin-left: -350px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  display: flex;
  margin-right: 80px;
`;

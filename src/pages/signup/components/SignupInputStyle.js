import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  margin: 50px auto;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    span {
      width: 100px;
    }
  }

  input {
    flex: 1;
    border: 1px solid #b4b4b4;
    border-radius: 5px;
  }
`;

export const SigninButton = styled.button`
  border: none;
  border-radius: 15px;
  background-color: #4caf50;
  color: white;
  padding: 10px;
  width: 300px;
  cursor: pointer;
`;

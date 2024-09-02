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
    margin-bottom: 15px;

    span {
      display: block;
    }
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

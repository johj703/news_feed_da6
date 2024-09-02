import styled from 'styled-components';

export const Title = styled.div`
  margin: 80px auto;
  font-family: 'YoonChildfundkoreaDaeHan', sans-serif;
  font-size: 42px;
  text-align: center;
`;

export const ModifyForm = styled.form`
  display: flex;
  gap: 80px;
`;

export const ProfileImageWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ProfileImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65%;
  border-radius: 100%;
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding: 50% 0;
  }
  > img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;

export const ImageButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 40px;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(50% - 10px);
    height: 48px;
    background: #407221;
    font-size: 20px;
    color: #fff;
    overflow: hidden;
    border-radius: 8px;
  }

  input {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(50% - 10px);
    height: 48px;
    background: #36474f;
    font-size: 20px;
    color: #fff;
    border-radius: 8px;
  }
`;

export const Box = styled.div`
  width: 62.5%;
  text-align: right;
`;
export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  padding: 40px 50px;
  border: 3px solid #aaa;
  border-radius: 8px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > label {
    flex: 1;
    font-family: 'YoonChildfundkoreaManSeh', sans-serif;
    font-size: 28px;
    text-align: left;
  }
`;

export const Input = styled.input`
  width: 71.7%;
  height: 68px;
  border: 3px solid #aaa;
  border-radius: 6px;
  padding: 0 16px;
  font-size: 18px;

  &:read-only {
    background: #c2c2c2;
  }
`;

export const PasswordChk = styled.span`
  display: ${(props) => props.display};
  width: 100%;
  text-align: right;
  margin-top: 8px;
  color: red;
`;

export const SubmitButton = styled.button`
  width: 195px;
  line-height: 60px;
  text-align: center;
  background: #407221;
  border: 0;
  outline: none;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  margin: 40px 0 0;
`;

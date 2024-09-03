import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  margin: 80px auto 40px;
  font-family: 'YoonChildfundkoreaDaeHan', sans-serif;
  font-size: 42px;
  text-align: center;
  @media (max-width: 780px) {
    margin: 40px 0 24px;
    font-size: 36px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > label {
    flex: 1;
    font-family: 'YoonChildfundkoreaManSeh', sans-serif;
    font-size: 18px;
    text-align: left;
    @media (max-width: 780px) {
      font-size: 16px;
    }
  }
`;

export const Input = styled.input`
  width: 78%;
  height: 48px;
  border: 2px solid #aaa;
  border-radius: 6px;
  padding: 0 16px;
  font-size: 18px;
  font-size: 16px;
`;

export const LoginButton = styled.button`
  outline: none;
  font-size: 18px;
  padding: 10px 0;
  margin-top: 20px;
  color: #fff;
  background: #608a46;
  border: 0;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background-color: #407221;
  }
  @media (max-width: 780px) {
    font-size: 16px;
    margin-top: 16px;
  }
`;

export const JoinGuide = styled.p`
  text-align: center;
  margin: 40px 0 24px;
  @media (max-width: 780px) {
    margin: 18px 0 18px;
  }
`;

export const JoinButton = styled.button`
  outline: none;
  width: 100%;
  font-size: 18px;
  padding: 10px 0;
  color: #fff;
  background: #36474f;
  border: 0;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background-color: #2d383d;
  }
  @media (max-width: 780px) {
    font-size: 16px;
  }
`;

export const GithubButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    display: block;
    width: 50px;
  }
`;

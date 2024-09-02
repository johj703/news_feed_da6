import styled from 'styled-components';

export const ModifyForm = styled.form``;

export const ProfileImageWrap = styled.div`
  margin: 0 auto;
`;
export const ProfileImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  overflow: hidden;
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
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > label {
    width: 20%;
    flex-shrink: 0;
  }
`;

export const Input = styled.input`
  flex: 1;
`;

export const PasswordChk = styled.span`
  display: ${(props) => props.display};
  width: 100%;
`;

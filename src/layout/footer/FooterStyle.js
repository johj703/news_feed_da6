import styled from 'styled-components';

export const FooterInner = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 24px;
  margin-top: 120px;
  background: #608a46;
  > img {
    height: 48px;
    width: auto;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 16px;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 16px;
    color: #fff;

    span {
      font-family: 'YoonChildfundkoreaManSeh', sans-serif;
    }
    img {
      width: 25px;
      height: auto;
    }
  }
`;

export const CopyRight = styled.div`
  color: #fff;
  font-size: 12px;
`;

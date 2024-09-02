import styled from 'styled-components';

export const HeaderInner = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #608a46;
  padding: 20px 40px;
  > img {
    height: 48px;
  }
`;

export const MemberLink = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
  a {
    font-family: 'YoonChildfundkoreaDaeHan', sans-serif;
    font-size: 24px;
    color: #fff;
    text-decoration: none;
  }
`;

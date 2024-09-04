import styled from 'styled-components';

export const BoardContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  @media (max-width: 780px) {
    margin-top: 60px;
  }
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 20%;
  min-width: 200px;
  margin: 0 0 24px auto;
  border-bottom: 2px solid #36474f;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  padding: 0 40px 0 0;
  outline: none;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border: 0;
  background: none;
  outline: none;
  > img {
    width: 30px;
    height: 30px;
  }
`;

export const Table = styled.table`
  display: block;
  width: 100%;
  border-top: 4px solid #36474f;
  tbody {
    display: block;
  }
`;

export const TableRow = styled.tr`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #36474f;
  cursor: pointer;
  @media (max-width: 780px) {
    padding: 12px 0px;
  }
`;

export const ImageCell = styled.td`
  flex-shrink: 0;
  position: relative;
  max-width: 88px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    width: 100%;
    padding: 40.9% 0;
  }
`;

export const ProfileImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`;

export const TableData = styled.td`
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 24px;
  box-sizing: border-box;
  @media (max-width: 780px) {
    padding-left: 16px;
    gap: 12px;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-content: center;
  font-weight: bold;
  font-size: 18px;
  gap: 8px;
  > div {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const SubRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  text-align: right;
`;

export const Button = styled.button`
  width: 110px;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 16px;
  line-height: 42px;
  color: #fff;
  border-radius: 8px;
  text-align: center;
  background: #608a46;
  transition: 0.3s;

  &:hover {
    background-color: #407221;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 780px) {
    gap: 16px;
    > div img {
      width: 30px;
    }
  }

  div.prev {
    margin-right: 8px;
  }

  div.next {
    margin-left: 8px;
  }
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  font-size: 24px;
  line-height: 1;
  text-decoration: none;
  font-family: 'YoonChildfundkoreaDaeHan', sans-serif;
  background: none;
  border: 0;
  border-bottom: ${(props) => (props.$isActive ? '2px solid #36474f' : 'none')};
  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none; /* 비활성화 상태에서 클릭 방지 */
    opacity: 0.5; /* 비활성화된 버튼을 시각적으로 표시 */
  `}

  @media (max-width: 780px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;

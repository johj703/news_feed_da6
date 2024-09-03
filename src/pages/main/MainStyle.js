import styled from 'styled-components';

export const BoardContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  @media (max-width: 780px) {
    margin-top: 60px;
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
  font-size: 18px;
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

  @media (max-width: 780px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;

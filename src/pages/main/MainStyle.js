import styled from 'styled-components';

export const BoardContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableData = styled.td`
  padding: 10px;
  text-align: left;
  vertical-align: top; /* 수직 정렬을 위쪽으로 */
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px; /* 버튼, 테이블 간 간격 추가 */
  /* align-self: flex-start; 버튼 좌측 정렬 */
  &:hover {
    background-color: #0056b3;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  margin: 0 5px;
  font-size: 16px;
  color: ${(props) => (props.isActive ? 'white' : '#007bff')};
  background-color: ${(props) => (props.isActive ? '#007bff' : 'white')};
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

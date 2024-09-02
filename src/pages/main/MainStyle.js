import styled from 'styled-components';

export const BoardContainer = styled.div`
  padding: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 2px solid #ccc;
  text-align: center;
  width: 25%; /* 각 셀의 너비 고정 */
  box-sizing: border-box; /* 패딩 포함해서 크기 고정 */
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  width: 25%; /* 각 셀의 너비 고정 */
  box-sizing: border-box; /* 패딩 포함해서 크기 고정 */
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

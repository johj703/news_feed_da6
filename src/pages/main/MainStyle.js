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

export const ImageCell = styled.td`
  width: 50px; /* 이미지 셀의 넓이를 고정 */
  padding: 10px;
  text-align: center;
  vertical-align: top;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%; /* 원형으로 만들기 */
  background-color: #ccc; /* 비어있는 이미지 배경을 회색으로 설정 */
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleRow = styled.div`
  font-weight: bold;
  margin-bottom: 5px; /* 제목과 아래 텍스트들 간의 간격 */
`;

export const SubRow = styled.div`
  color: #555;
  font-size: 0.9em;
  display: flex;
  justify-content: flex-start;
  gap: 25px;
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

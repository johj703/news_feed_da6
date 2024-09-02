import styled from 'styled-components';

// 마이페이지 상단 : 회원정보 박스 레이아웃
export const InfoBox = styled.div`
  display: flex;
  border: 1px solid black;
`;

// 프로필 이미지
export const ProfileImg = styled.span`
  width: 25%;
  max-width: 400px;
`;

// 회원 정보
export const MemberInfo = styled.div`
  // 이름
  > h4.name {
  }

  // 이메일
  > span.email {
  }
`;

// 마이페이지 하단 : 게시글 박스 레이아웃
export const MyBoardList = styled.ul`
  border: 1px solid red;
`;

// 게시글 한 줄 씩
export const MyArticle = styled.li``;

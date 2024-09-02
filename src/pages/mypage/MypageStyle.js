import styled from 'styled-components';

export const MyPageWrap = styled.div`
  display: flex;
  gap: 50px;
  margin: 80px auto;
`;

// 마이페이지 상단 : 회원정보 박스 레이아웃
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px;
  border: 3px solid #407221;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;

  > a {
    display: inline-block;
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    padding: 7px 16px;
    border-radius: 8px;
    background: #36474f;
  }
`;

// 프로필 이미지
export const ProfileImg = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  overflow: hidden;
  border: 2px solid #36474f;
  border-radius: 100%;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding: 50% 0;
  }
  img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;

// 회원 정보
export const MemberInfo = styled.div`
  // 이름
  > h4.name {
    font-size: 32px;
    margin: 0;
  }

  // 이메일
  > span.email {
    display: block;
    margin-top: 18px;
    font-size: 24px;
  }
`;

export const BoardArea = styled.div`
  width: 61%;
`;

// 마이페이지 하단 : 게시글 박스 레이아웃
export const MyBoardList = styled.ul`
  margin: 0;
  padding: 0;
  border: 3px solid #9e9e9e;
  border-radius: 10px;
`;

// 게시글 한 줄 씩
export const MyArticle = styled.li`
  padding: 24px;
  list-style: none;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
  }

  + li {
    border-top: 2px solid #aaa;
  }
`;

export const Paging = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 20px;
  margin-top: 70px;

  div.prev {
    margin-right: 8px;
  }

  div.next {
    margin-left: 8px;
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    font-size: 24px;
    line-height: 1;
    text-decoration: none;
    font-family: 'YoonChildfundkoreaDaeHan', sans-serif;

    &.nowPage {
      border-bottom: 2px solid #36474f;
    }
  }
`;

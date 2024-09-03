import styled from 'styled-components';

export const MyPageWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;
  min-height: 70vh;
  padding: 80px 0 0;

  @media (max-width: 780px) {
    flex-direction: column;
    gap: 40px;
  }
`;

// 마이페이지 : 회원정보 박스 레이아웃
export const InfoBox = styled.div`
  flex: 1;
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
    transition: 0.3s;

    &:hover {
      background-color: #2d383d;
    }
  }

  @media (max-width: 780px) {
    width: 100%;
    gap: 24px;
    a {
      font-size: 16px;
      padding: 6px 12px;
    }
  }
`;

// 프로필 이미지
export const ProfileImg = styled.span`
  position: relative;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

  @media (max-width: 780px) {
    h4.name {
      font-size: 24px;
    }
    span.email {
      margin-top: 12px;
      font-size: 18px;
    }
  }
`;

export const BoardArea = styled.div`
  width: 61%;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const BoardTab = styled.div`
  position: relative;
  display: flex;
  border-radius: 8px;
  background: #608a46;
  margin-bottom: 24px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background: rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  &.bookmark::before {
    left: 50%;
  }
  span {
    z-index: 1;
    position: relative;
    width: 50%;
    padding: 12px 0;
    font-size: 18px;
    text-align: center;
    color: #fff;
    cursor: pointer;

    @media (max-width: 780px) {
      font-size: 16px;
    }
  }
`;

// 게시글 박스 레이아웃
export const MyBoardList = styled.ul`
  margin: 0;
  padding: 0;
  border: 3px solid #9e9e9e;
  border-radius: 10px;
`;

// 게시글 한 줄 씩
export const MyArticle = styled.li`
  padding: 16px;
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

  @media (max-width: 780px) {
    padding: 12px 16px;
  }
`;

export const Paging = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 20px;
  margin-top: 70px;
  @media (max-width: 780px) {
    gap: 16px;
    margin-top: 40px;
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
    @media (max-width: 780px) {
      width: 30px;
      height: 30px;
      font-size: 16px;
    }
  }
`;

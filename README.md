# 🪴다'육'이
스파르타 코딩클럽 내일배움캠프 React_6기 커뮤니티 입니다.

학습 과정, 재밌는 글, 질문, 잡당 등 다양한 게시글들을 자유롭게 업로드하고 소통해보세요!
<br/>
<br/>

# 🌟 배포 링크

[다'육'이 (내일배움캠프_Reat 6기)](https://news-feed-da6.vercel.app/)
<br/>
<br/>

# 📚 프로젝트 구조

<details>
<summary>접었다 펴기</summary>

```
📦src
 ┣ 📂assets
 ┃ ┣ 📜back-btn.png
 ┃ ┣ 📜bookmark-off.png
 ┃ ┣ 📜bookmark-on.png
 ┃ ┣ 📜down.png
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜github-mark.png
 ┃ ┣ 📜github.svg
 ┃ ┣ 📜logo.png
 ┃ ┣ 📜next.png
 ┃ ┣ 📜no-image.png
 ┃ ┣ 📜prev.png
 ┃ ┣ 📜react.svg
 ┃ ┣ 📜up.png
 ┃ ┗ 📜velog.svg
 ┣ 📂context
 ┃ ┗ 📜UserConext.jsx
 ┣ 📂layout
 ┃ ┣ 📂footer
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜FooterStyle.js
 ┃ ┣ 📂header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜HeaderStyle.js
 ┃ ┗ 📜Layout.jsx
 ┣ 📂pages
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Form
 ┃ ┃ ┃ ┣ 📜Form.jsx
 ┃ ┃ ┃ ┗ 📜FormStyle.js
 ┃ ┃ ┗ 📜TuiEditor.jsx
 ┃ ┣ 📂detail
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂comment
 ┃ ┃ ┃ ┃ ┣ 📜CommentItem.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Comments.jsx
 ┃ ┃ ┃ ┃ ┣ 📜CommentsStyle.js
 ┃ ┃ ┃ ┃ ┗ 📜CommentUpdateForm.jsx
 ┃ ┃ ┃ ┗ 📜getPost.js
 ┃ ┃ ┣ 📂context
 ┃ ┃ ┃ ┗ 📜CommentContext.jsx
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┗ 📜useComments.js
 ┃ ┃ ┣ 📂modify
 ┃ ┃ ┃ ┣ 📜Modify.jsx
 ┃ ┃ ┃ ┗ 📜ModifyStyle.js
 ┃ ┃ ┣ 📜Detail.jsx
 ┃ ┃ ┗ 📜DetailStyle.js
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜LoginInput.jsx
 ┃ ┃ ┃ ┗ 📜LoginInputStyle.js
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┗ 📜LoginStyle.js
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┗ 📜MainStyle.js
 ┃ ┣ 📂mypage
 ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┣ 📜BookMark.jsx
 ┃ ┃ ┃ ┗ 📜MyBoard.jsx
 ┃ ┃ ┣ 📂mymodify
 ┃ ┃ ┃ ┣ 📜Mymodify.jsx
 ┃ ┃ ┃ ┗ 📜MymodifyStyle.js
 ┃ ┃ ┣ 📜Mypage.jsx
 ┃ ┃ ┗ 📜MypageStyle.js
 ┃ ┣ 📂signup
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜SignupInput.jsx
 ┃ ┃ ┃ ┗ 📜SignupInputStyle.js
 ┃ ┃ ┣ 📜Signup.jsx
 ┃ ┃ ┗ 📜SignupStyle.js
 ┃ ┗ 📂write
 ┃ ┃ ┣ 📜Write.jsx
 ┃ ┃ ┗ 📜WriteStyle.js
 ┣ 📂shared
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜PrivateRoute.jsx
 ┃ ┗ 📜Router.jsx
 ┣ 📂supabase
 ┃ ┗ 📜supabase.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜main.jsx
 ┗ 📜reset.css
```
</details>


<br/>

# ⚒️ 개발 환경

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

<br/>
<br/>

# 📆프로젝트 기간

24.08.28 ~ 24.09.03

<br/>
<br/>

# 🎨 주요 기능

## 1️⃣ 로그인 / 회원가입
![login](https://github.com/user-attachments/assets/71ca6f8c-3fad-48a0-bf23-b83c2f7e0b9a)

### 1-1. 회원가입
양식에 맞춰 정보를 입력해준 뒤, 회원가입이 완료되면 자동으로 로그인이 됩니다.

### 1-2. 로그인
가입하신 이메일과 비밀번호를 입력하시면 로그인이 완료됩니다.

깃허브를 이용한 회원가입과 로그인도 가능합니다.

<br/>

## 2️⃣ 마이페이지 / 회원정보수정
![mypage](https://github.com/user-attachments/assets/c4780742-21d8-4635-a77c-9b54a2d7d7b7)

### 2-1. 마이페이지
로그인한 유저 정보를 확인 가능하며,
내가 쓴 게시글과 북마크한 게시글을 확인 할 수 있습니다.

### 2-2. 회원 정보 수정
프로필 이미지와 닉네임, 비밀번호를 새로 수정하여 업데이트합니다.

<br/>

## 3️⃣ 메인페이지 / 게시글 / 댓글
![main](https://github.com/user-attachments/assets/7292397a-e87d-4b1e-bb05-575c0ee8767e)

### 3-1. 메인 페이지
등록된 게시글이 최신순으로 출력되며, 페이징으로 다음 게시글을 확인 하실 수 있습니다.

### 3-2. 게시글 작성 / 수정 / 삭제
마크다운 문법을 이용하여 글 작성이 가능하며, 
게시글 작성자는 해당 글을 수정, 삭제 하실 수 있습니다.

### 3-3. 댓글 작성 / 수정 / 삭제
각 게시글 별로 댓글을 추가 하실 수 있으시며,
댓글 작성자는 해당 댓글을 수정, 삭제 하실 수 있습니다.
<br/>
<br/>
<br/>
<br/>

# 💥 트러블 슈팅

| 문제 | 원인 | 해결|
|---|---| ---|
| PageButton이 `disabled`속성이 있지만 클릭이 가능 | `styled-components`로 만들어진 button은 `disabled` 속성이 제대로 작동하지 않을 수 있다. | `pointer-events:none;` css 스타일을 사용하여 클릭을 방지하였습니다.|
| 프로필 이미지 변경 시, 이전 프로필 이미지가 출력 | `supabase storage`에 등록된 이미지 url이 변경되지 않아, 브라우저 캐시로 인하여 이전 이미지가 출력 | 이미지 업로드시에 <br/> `?version=crypto.radomUUID()`를 이용한 고유 버전을 부여하여 캐시 문제를 해결하였습니다. |
| 회원 탈퇴 기능이 구현되지 않음 | `admin key`를 이용해야하기에 추가 백엔드 작업이 필요하였습니다. | 회원 이메일을 `randomUUID`로 치환하여 유저에게 회원탈퇴와 유사한 경험을 제공하려 하였으나, 이메일 변경 시, 추가 인증이 필요한 것으로 확인되어 해결하지 못하였습니다. |
| 이메일 중복확인을 하는데 어려움을 겪음 | `supabase.auth.admin.listUsers()`를 사용하려 하였으나, 사용자가 많아질 수록 성능 문제가 발생 할 수 있음 | `supabase.auto.signUp()`에서 제공하는 중복이메일 error 메시지를 활용하여 중복 확인을 처리하였습니다.|
| 비로그인 상태에서 특정 페이지 접근 시, 오류메시지를 출력 전에 로그인페이지로 넘어감 | 오류 메시지와, 페이지 navigate가 비동기처리가 되어있지 않았습니다. | `Swal.fire()`가 Promise를 반환하는 사실을 새로 알게되어, `.then()`을 이용하여 순서대로 작업대도록 구현하였습니다.|
| 글 작성 시에, 이미지 URL이 길게 표시되어 사용자 경험을 해침 | `Toast UI Editor`기본 로직으로 확인 | 이미지 URL을 바로 출력하는 것이 아닌, `supabase storage`에 업로드 후, 저장 URL을 받아와 에디터에 삽입하는 방식으로 해결 |
| 댓글 수정 작업 중, `22P02` 에러 출력 | 데이터 테이블의 column에 `UUID`가 존재하지않아서 발생하는 문제인결로 확인되었습니다. |  기존 commets_id로 명명되어있던 column의 이름을 `uuid`로 변경하여 해결하였습니다.| 


<br/>
<br/>
<br/>

# 💭 자체 평가 의견
- 조현준(팀장)
  - 팀 프로젝트 답게 각자 구현한 페이지들을 합치는 일에는 많은 에너지가 필요하다는 것을 느꼈습니다.

- 박준호(팀원) 
  - 하고자 했던 기능들은 구현하였으나, 완벽한 구현이 아닌 나사빠진 구현들이 있어서 아쉬움이 느껴집니다. 또한 react를 통한 작업보다 supabase에 시간을 너무 많이 할당하게 된 점도 아쉬움으로 남습니다.

- 이기성(팀원)
  - 코드 정리가 미흡했던 점과 버그가 있어서 완벽하게 해결하고 싶었으나 시간이 촉박하여 해결하지 못한 점이 아쉬웠습니다. 다만 팀프로젝트를 하면서 생각보다 완성도가 높은 프로젝트가 된것 같아 만족스럽습니다.

- 송진우(팀원)
  - 어떻게든 기능 구현은 했지만, 코드 응용과 수정에 아쉬움이 많이 남는다.


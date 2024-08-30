const LoginInput = () => {
  return (
    <inputContainer>
      <h1>로그인</h1>
      <form action="">
        <div>
          <input type="text" placeholder="아이디" />
        </div>
        <div>
          <input type="password" placeholder="비밀번호" />
        </div>
        <button>로그인</button>
      </form>
    </inputContainer>
  );
};

export default LoginInput;

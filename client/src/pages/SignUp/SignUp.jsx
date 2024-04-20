import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { register } from "../../service/authService";
import styles from "./SignUp.module.css";

export default function SignUp() {
  const navigator = useNavigate();
  const [inputs, setInput] = useState({
    email: "",
    name: "",
    pwd: "",
  });

  const { email, name, pwd } = inputs;
  const inputHandler = (e) => {
    setInput({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    await register({ email, name, pwd });
    return navigator("/signin");
  };
  return (
    <form className={styles.SignUp}>
      <div className={styles.Card}>
        <div className={styles.Left} />
        <div className={styles.Right}>
          <h2>회원가입</h2>
          <Input
            type="email"
            name="email"
            id="이메일"
            placeholder={"이메일을 입력하세요."}
            onChange={inputHandler}
          />
          <Input
            type="text"
            name="name"
            id="이름"
            placeholder={"이름 입력하세요."}
            onChange={inputHandler}
          />
          <Input
            type="password"
            name="pwd"
            id="비밀번호"
            placeholder={"비밀번호를 입력하세요."}
            onChange={inputHandler}
          />
          <Input
            type="password"
            name="pwdConfirm"
            id="비밀번호 확인"
            placeholder={"비밀번호를 한번 더 입력하세요."}
            onChange={inputHandler}
          />
          <Button title="회원가입" onClick={registerHandler} />
          <div className={styles.Bottom}>
            <Link to={"/signin"}>로그인</Link>
          </div>
        </div>
      </div>
    </form>
  );
}

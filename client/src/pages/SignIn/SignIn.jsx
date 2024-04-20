import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import styles from "./SignIn.module.css";

export default function SignIn() {
  const [inputs, setInput] = useState();
  return (
    <form className={styles.SignIn}>
      <div className={styles.Card}>
        <div className={styles.Left} />
        <div className={styles.Right}>
          <h2>로그인</h2>
          <Input
            type="email"
            name="이메일"
            placeholder={"이메일을 입력하세요."}
          />
          <Input
            type="password"
            name="비밀번호"
            placeholder={"비밀번호를 입력하세요."}
          />
          <Button title="로그인" />
          <div className={styles.Bottom}>
            <Link to={"/signup"}>회원가입</Link>
          </div>
        </div>
      </div>
    </form>
  );
}

import {useState} from "react";
import {signInWithEmail} from "firebase/func"

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailHandler = ({target}) => {
    setEmail(target.value)
  }
  const passwordHandler = ({target}) => {
    setPassword(target.value)
  }
  const submitHandler = e => {
    e.preventDefault();
    signInWithEmail(email, password).then(()=> console.log("siginSuccess"))
  }
  return (
    <form onSubmit={submitHandler}>
      <input placeholder="email" type="text" onChange={emailHandler} value={email} />
      <input placeholder="password" type="text" onChange={passwordHandler} value={password} />
    </form>
  )
}

export default Signin;
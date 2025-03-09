import { useContext } from "react";
import AuthContext from "./context/auth-context";

function Auth() {
  const { status, login } = useContext(AuthContext);

  return (
    <div>
      <h1>Entry?</h1>
      {status ? <p>Already inside</p> : <p>No</p>}
      <button onClick={login}>Click</button>
    </div>
  );
}

export default Auth;

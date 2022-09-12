import { useNavigate } from "react-router";
import NavigationBar from "./NavigationBar";
function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="login-bg">
      <div className="helper-container-login">
        <div className="login-container">
          <h1>Please login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={() => navigate("/home")}>Login</button>
          <button id="sign-up-button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

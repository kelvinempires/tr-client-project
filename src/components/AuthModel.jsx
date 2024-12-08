import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const AuthModel = ({ setShowModel, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  console.log(email, password, confirmPassword);

  const handleClick = () => {
    setShowModel(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:8000/${isSignUp ? "signup" : "login"}`,
        { email, password }
      );

      
      setCookie("AuthToken", response.data.token);

      const success = response.status === 201;

      if (success && isSignUp) navigate("/onboarding");
      if (success && !isSignUp) navigate("/dashboard");

    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };
  return (
    <div className="auth-model">
      {" "}
      <div className="close-icon" onClick={handleClick}>
        {" "}
        *{" "}
      </div>{" "}
      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>{" "}
      <p>
        {" "}
        By clicking Submit, you agree to our terms. Learn how we process your
        data in our privacy policy and cookie policy.{" "}
      </p>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="Confirm Password"
            required={true}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}{" "}
        <button className="secondary-button" type="submit">
          {" "}
          {isSignUp ? "Sign Up" : "Log In"}{" "}
        </button>{" "}
        {error && <p className="error">{error}</p>}{" "}
      </form>{" "}
      <hr /> <h2>GET THE APP</h2>{" "}
    </div>
  );
};
export default AuthModel;

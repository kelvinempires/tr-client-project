import Nav from "../components/Nav";
import AuthModel from "../components/AuthModel";
import { useState } from "react";


const Home = () => {
  const [showModel, setShowModel] = useState(false)
  const[isSignup, setIsSignup] = useState(true)

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModel(true)
    setIsSignup(true)

  };
  return (
    <div className="overlay">
      <Nav minimal={false}
        setShowModel={setShowModel}
         showModel={showModel}
         setIsSignup={setIsSignup}/>
      <div className="Home">
        <h1 className="primary-title">Swipe Right@</h1>
        <button className="Primary-button" onClick={handleClick}>
          {authToken ? 'Signout' : "Create Account"}
        </button>
        {showModel && (
          <AuthModel setShowModel={setShowModel} isSignup={isSignup}/>
          )}
      </div>
    </div>
  );
};
export default Home;

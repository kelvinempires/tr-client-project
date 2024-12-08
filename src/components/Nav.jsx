import whiteLogo from '../images/cK.png'
import secondLogo from '../images/white.png'

const Nav = ({ minimal, setShowModel, showModel, setIsSignup }) => {
  const handleClick = () => {
    setShowModel(true);
    setIsSignup(false)
  };
  const authToken = false
  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? secondLogo : whiteLogo}
          alt="logo"
        />
      </div>

      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModel}
        >
          Log in
        </button>
      )}
    </nav>
  );
};
export default Nav;

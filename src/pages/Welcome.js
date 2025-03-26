import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/signin');
  };

  return (
    <div className="welcome-container">
      <h2>Welcome to PopX</h2>
      <p>Loren ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button className="create-account-button" onClick={handleCreateAccount}>Create Account</button>
      <button className="login-button" onClick={handleLogin}>Already Registered? Login</button>
    </div>
  );
};

export default Welcome;
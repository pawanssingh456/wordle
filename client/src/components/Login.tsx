// src/components/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Replace with your actual authentication logic and API calls
    // For simplicity, we'll use a predefined username and password
    if (username === 'user' && password === 'password') {
      // Successful login, navigate to the game page
      navigate('/');
    } else {
      // Failed login, display an error message or take appropriate action
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={username} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={handleInputChange} />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

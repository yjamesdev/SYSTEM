import React, { useState } from 'react';
import axios from 'axios';
import './assets/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5104/api/Account/login',
        {
          username,
          password,
        }
      );
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('username', user.name);
      console.log('Auth success: ', token);
      navigate('/');
      e;
    } catch (error) {
      setError('Authentication failed. Please check your credentials.');
      console.error('failed: ', error);
    }
  };

  return (
    <>
      <div className="bg-white px-10 py-20 rounded-3xl border-gray-100">
        <h1 className="text-5xl font-semibold">Welcome Back</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Welcome back! Please enter your details.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mt-8">
            <div>
              <label className="text-lg font-medium">Username</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                type="text"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="text-lg font-medium">Password</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                type="submit"
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
         {error && (
          <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded relative
          text-sm max-w-xs mx-auto" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
      </div>
    </>
  );
};
export default Login;

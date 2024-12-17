import React, { useState } from 'react';
import axios from 'axios';
import FormInput from './FormInput';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/signup/', formData);
      setMessage('User registered successfully!');
    } catch (error) {
      setMessage('Error: ' + error.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Signup</h1>
        <FormInput label="Username" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" />
        <FormInput label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
        <FormInput label="Password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
        <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700">
          Signup
        </button>
        {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default SignupPage;

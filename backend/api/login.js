import axios from 'axios';

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('/api/login', { email, password });
    // Handle successful login
  } catch (error) {
    // Handle login error
  }
};

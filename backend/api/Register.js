const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/backend/Api/Register.js', { email, password });
      // Handle successful registration
    } catch (error) {
      // Handle registration error
    }
  };
  
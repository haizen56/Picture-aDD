/* eslint-disable no-unused-vars */
// import React from 'react'
// import "./Home.css"
// const Home = () => {
//   return (
//     <div>

//         <div className="container">
//             <div className="navbar">
//                 myself pics
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Home





// import React from 'react'
// import "./Home.css"
// const Home = () => {
//   return (
//     <div>

//         <div className="container">
//             <div className="navbar">
//                 myself pics
//             </div>
{/* <div className="login">
<h2>Login</h2>
<form>
  <label htmlFor="username">Username:</label>
  <input type="text" id="username" name="username" /><br /><br />
  <label htmlFor="password">Password:</label>
  <input type="password" id="password" name="password" /><br /><br />
  <button type="submit">Submit</button>
</form>
</div> */}
//         </div>
//     </div>
//   )
// }

// export default Home






import React from 'react';
import './Home.css'; // Import the CSS file for the component
import { Route } from 'react-router-dom';
const validateLogin = (email, password) => {
  const errors = {};

  // Validate email
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email is invalid';
  }

  // Validate password
  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
}
const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar">
        <h1 className="navbar-title">Myself Pics</h1>
        <nav className='nav-right'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      <nav>

      </nav>
      <div className="upload-container">
        <h2 className="upload-title">Upload Images</h2>
        <p>But first login into the website</p>
        <input type="file" multiple className="upload-input" />
        <button className="upload-button">Login</button>
      </div>
    </div>
  );
};

export default Home;







// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css'; // Import the CSS file for the component
// import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
//  import Login from './Login'
// const validateLogin = (email, password) => {
//   const errors = {};

//   // Validate email
//   if (!email) {
//     errors.email = 'Email is required';
//   } else if (!/\S+@\S+\.\S+/.test(email)) {
//     errors.email = 'Email is invalid';
//   }

//   // Validate password
//   if (!password) {
//     errors.password = 'Password is required';
//   } else if (password.length < 6) {
//     errors.password = 'Password must be at least 6 characters';
//   }

//   return errors;
// }

// const Home = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const errors = validateLogin(email, password);
//     if (Object.keys(errors).length === 0) {
//       try {
//         // Make API call to authenticate user
//         const response = await axios.post('/api/login', { email, password });
//         // Handle successful login
//       } catch (error) {
//         // Handle login error
//       }
//     } else {
//       // Handle validation errors
//     }
//   };

//   return (
//     <div className="home-container">
//       <div className="navbar">
//         <h1 className="navbar-title">Myself Pics</h1>
//         <nav className='nav-right'>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Contact</a></li>
//             <li><Link to="/login" className="login-link">Login</Link></li>
//           </ul>
//         </nav>
//       </div>
//       <nav>

//       </nav>
//       <div className="upload-container">
//         <h2 className="upload-title">Upload Images</h2>
//         <input type="file" multiple className="upload-input" />
//         <button className="Login_btn" onClick={handleLogin}>     <Route path="/login" element={<Login />} />
// </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

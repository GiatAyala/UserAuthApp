// // // import React, { useState } from 'react';

// // // function LoginForm() {
// // //   const [username, setUsername] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [userDetails, setUserDetails] = useState(null);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
    
// // //     // שליחת בקשה ל-API
// // //     const response = await fetch('https://localhost:7207/api/Authenticate/login', {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify({ username, password }),
// // //     });
    
// // //     const data = await response.json();

// // //     // אם קיבלנו טוקן, נשמור אותו ונחלץ את פרטי המשתמש
// // //     if (data.token) {
// // //       sessionStorage.setItem('token', data.token);
// // //       const userDetails = parseJwt(data.token);  // חילוץ פרטי המשתמש מתוך הטוקן
// // //       setUserDetails(userDetails);  // עדכון ה-state עם פרטי המשתמש
// // //       alert('Login successful!');
// // //     } else {
// // //       alert('Login failed. Please try again.');
// // //     }
// // //   };

// // //   // פונקציה לחילוץ פרטי המשתמש מהטוקן
// // //   const parseJwt = (token) => {
// // //     try {
// // //       debugger
// // //       const base64Url = token.split('.')[1];
// // //       const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
// // //       const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
// // //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
// // //       }).join(''));
// // //       return JSON.parse(jsonPayload);
// // //     } catch (e) {
// // //       console.error('Error decoding token', e);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <form onSubmit={handleSubmit}>
// // //         <input
// // //           type="text"
// // //           placeholder="Username"
// // //           value={username}
// // //           onChange={(e) => setUsername(e.target.value)}
// // //         />
// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //         />
// // //         <button type="submit">Login</button>
// // //       </form>

// // //       {userDetails && (
// // //         <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
// // //           <h3>Welcome, {userDetails.FullName}!</h3>
// // //           <p><strong>Email:</strong> {userDetails.email}</p>
// // //           <p><strong>Role:</strong> {userDetails.role}</p>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default LoginForm;


// // import React, { useState } from 'react';

// // function LoginForm() {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [userDetails, setUserDetails] = useState(null);
// //   const [loginFailed, setLoginFailed] = useState(false); // משתנה למעקב אחר כישלון התחברות

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     // שליחת בקשה ל-API
// //     const response = await fetch('https://localhost:7207/api/Authenticate/login', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ username, password }),
// //     });
    
// //     const data = await response.json();

// //     // אם קיבלנו טוקן, נשמור אותו ונחלץ את פרטי המשתמש
// //     if (data.token) {
// //       sessionStorage.setItem('token', data.token);
// //       const userDetails = parseJwt(data.token);  // חילוץ פרטי המשתמש מתוך הטוקן
// //       setUserDetails(userDetails);  // עדכון ה-state עם פרטי המשתמש
// //       setLoginFailed(false); // איפוס כישלון התחברות
// //       alert('Login successful!');
// //     } else {
// //       setUserDetails(null); // איפוס פרטי המשתמש
// //       setLoginFailed(true); // סימון התחברות כושלת
// //       alert('Login failed. Please try again.');
// //     }
// //   };

// //   // פונקציה לחילוץ פרטי המשתמש מהטוקן
// //   const parseJwt = (token) => {
// //     try {
// //       const base64Url = token.split('.')[1];
// //       const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
// //       const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
// //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
// //       }).join(''));
// //       return JSON.parse(jsonPayload);
// //     } catch (e) {
// //       console.error('Error decoding token', e);
// //     }
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Username"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         <button type="submit">Login</button>
// //       </form>

// //       {userDetails && (
// //         <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
// //           <h3>Welcome, {userDetails.FullName}!</h3>
// //           <p><strong>Email:</strong> {userDetails.email}</p>
// //           <p><strong>Role:</strong> {userDetails.role}</p>
// //         </div>
// //       )}

// //       {loginFailed && (
// //         <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #f44336', borderRadius: '5px', backgroundColor: '#ffe6e6', color: '#d32f2f' }}>
// //           <h3>Login failed</h3>
// //           <p>User not found or incorrect credentials. Please try again or register if you do not have an account.</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default LoginForm;


// import React, { useState } from 'react';
// import './LoginForm.css'; // יצירת קובץ CSS נפרד לעיצוב

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [userDetails, setUserDetails] = useState(null);
//   const [loginFailed, setLoginFailed] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoginFailed(false);

//     const response = await fetch('https://localhost:7207/api/Authenticate/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await response.json();

//     if (data.token) {
//       sessionStorage.setItem('token', data.token);
//       const userDetails = parseJwt(data.token);
//       setUserDetails(userDetails);
//     } else {
//       setLoginFailed(true);
//     }
//   };

//   const parseJwt = (token) => {
//     try {
//       const base64Url = token.split('.')[1];
//       const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//       const jsonPayload = decodeURIComponent(
//         atob(base64).split('').map((c) => {
//           return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//         }).join('')
//       );
//       return JSON.parse(jsonPayload);
//     } catch (e) {
//       console.error('Error decoding token', e);
//     }
//   };

//   return (
//     <div className="login-form-container">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className="input-field"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           className="input-field"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className="submit-button">Login</button>
//       </form>

//       {userDetails && (
//         <div className="user-details">
//           <h3>Welcome, {userDetails.FullName}!</h3>
//           <p><strong>Email:</strong> {userDetails.email}</p>
//           <p><strong>Role:</strong> {userDetails.role}</p>
//         </div>
//       )}

//       {loginFailed && (
//         <p className="login-failed-message">Login failed. User not found. Please try again.</p>
//       )}
//     </div>
//   );
// }

// export default LoginForm;


import React, { useState } from 'react';
import './LoginForm.css'; // קובץ CSS מותאם אישית

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://localhost:7207/api/Authenticate/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.token) {
      sessionStorage.setItem('token', data.token);
      const userDetails = parseJwt(data.token);
      setUserDetails(userDetails);
    } else {
      setUserDetails({ error: 'User not found. Please check your credentials.' });
    }
  };

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Error decoding token', e);
    }
  };

  return (
    <div className="login-container">
      {!userDetails && (
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      )}

      {userDetails && !userDetails.error && (
        <div className="user-details-box">
          <h3>Welcome, {userDetails.FullName}!</h3>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Role:</strong> {userDetails.role}</p>
        </div>
      )}

      {userDetails && userDetails.error && (
        <div className="error-message">
          {userDetails.error}
        </div>
      )}
    </div>
  );
}

export default LoginForm;

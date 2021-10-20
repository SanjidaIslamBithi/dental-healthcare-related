import React from 'react';
import useAuth from '../../../hooks/useAuth'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please lOg in</h2>
            <button onClick={signInUsingGoogle} className="btn btn-primary">google login</button>
        </div>
    );
};

export default Login;































// import React from 'react';

// import {useLocation, useHistory, Link } from 'react-router-dom';

// import './Login.css'


// const Login = () => {
//       // const {user, signInUsingGoogle} = useFirebase();
//       const {signInUsingGoogle} = useAuth();
//       const location = useLocation();
//       console.log('came from', location.state?.from);
//       const history = useHistory();
//       const redirect_uri = location.state?.from || '/shop';
  
//       const handleGoogleLogin = () => {
//           signInUsingGoogle()
//               .then(result => {
//                   history.push(redirect_uri);
//               })
//       }
  
//       return (
//           <div className="login-form">
//               <div>
//                   <h2>Login</h2>
//                   <form>
//                       <input type="email" name="" id="" placeholder="Your Email" />
//                       <br />
//                       <input type="password" name="" id="" />
//                       <br />
//                       <input type="submit" value="Submit" />
//                   </form>
//                   <p>new to ema-john website ? <Link to="/register">Create Account</Link></p>
//                   <div>-------or----------</div>
//                   <button
//                       className="btn-regular"
//                       onClick={handleGoogleLogin}
//                   >Google Sign In</button>
//               </div>
//           </div>
//       );
//   };

// export default Login;
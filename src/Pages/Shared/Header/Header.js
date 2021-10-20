import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import logooo from '../../../images/logoooo.png';

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg='light'
        variant='primary'
        sticky='top'
        collapseOnSelect
        expand='lg'
      >
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src={logooo}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Dental&Health
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Nav.Link as={HashLink} to='/home#home'>
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to='/home#services'>
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to='/home#topdentists'>
            Specialist
            </Nav.Link>
            <Nav.Link as={HashLink} to='/home#aboutus'>
            AboutUs
            </Nav.Link>
            <NavDropdown title='Services' id='navbarScrollingDropdown'>
              <NavDropdown.Item as={HashLink} to='/home#services'>TopServices</NavDropdown.Item>
              <NavDropdown.Item href="fullservices">
                All Services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            {/* {user?.email ? (
              <Button onClick={logOut} variant='light'>
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            )} */}
           {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

// import React from 'react';
// import { Button, Container, Nav, Navbar } from 'react-bootstrap';

// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import useAuth from '../../../Hooks/useAuth';

// const Header = () => {
//   const { user, logOut } = useAuth();
//   return (
//     <>
//       <Navbar
//         bg='dark'
//         variant='dark'
//         sticky='top'
//         collapseOnSelect
//         expand='lg'
//       >
//         <Container>
//           <Navbar.Brand href='#home'>Dental&Health</Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse className='justify-content-end'>
//             <Nav.Link as={HashLink} to='/home#home'>
//               Home
//             </Nav.Link>
//             <Nav.Link as={HashLink} to='/home#services'>
//               Services
//             </Nav.Link>
//             <Nav.Link as={HashLink} to='/home#experts'>
//               Experts
//             </Nav.Link>
//             {user?.email ? (
//               <Button onClick={logOut} variant='light'>
//                 Logout
//               </Button>
//             ) : (
//               <Nav.Link as={Link} to='/login'>
//                 Login
//               </Nav.Link>
//             )}
//             <Navbar.Text>
//               Signed in as: <a href='#login'>{user?.displayName}</a>
//             </Navbar.Text>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Header;

// // import React from 'react';
// // import logo from '../../../images/my-logo.png'
// // import './Header.css'
// // const Header = () => {
// //   return (
// //     <div>
// //       <div className="row menubar-container">
// //         <div className="col-md-2 col-lg-2 col-sm-12">
// //           <div className="logo p-3">
// //             <img src={logo} alt="" />
// //           </div>
// //         </div>
// //         <div className="col-md-10 col-lg-10 col-sm-12">
// //           <div className="menu-items me-5">
// //             <ul className="d-flex align-items-end justify-content-end">
// //               <li className="items m-2 p-2">Home</li>
// //               <li className="items m-2 p-2">Shop</li>
// //               <li className="items m-2 p-2">Contact</li>
// //               <li className="items m-2 p-2">About</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //   );
// // };

// // export default Header;

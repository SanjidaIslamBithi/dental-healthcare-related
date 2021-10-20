import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Dental&Health</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                  Dentistry is not expensive…..neglect is!
                  </small>
                </p>

                <p className="mt-5">
                  <small>Dental&Health © . All rights reserved.</small>
                </p>
              </div>
            </div>
            {/* linking us with nenu */}
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                 <Link to="/home" className="menu-linker"> <li className="footer-menu">Home</li></Link>
                 <Link to="/services"  className="menu-linker"><li className="footer-menu">Services</li></Link>
                 <Link to="/aboutus"  className="menu-linker"><li className="footer-menu">Contact us</li></Link>
                 <Link to="/contactus"  className="menu-linker"><li className="footer-menu"> About us</li></Link>
                  
                  
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+1 8 800 555 35 35</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      160 Broadway, New York, NY 10038,
                      <br /> 102 1st Avenue, New York, NY 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;





















// import React from 'react';
// import './Footer.css'




// const Footer = () => {
//     return (
//         <div>
//        <footer class="site-footer">
//       <div class="container">
//         <div class="row">
//           <div class="col-sm-12 col-md-6">
//             <h6>About</h6>
//             <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
//           </div>

//           <div class="col-xs-6 col-md-3">
//             <h6>Categories</h6>
//             <ul class="footer-links">
//               <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
//               <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
//               <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
//               <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
//               <li><a href="http://scanfcode.com/category/android/">Android</a></li>
//               <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
//             </ul>
//           </div>

//           <div class="col-xs-6 col-md-3">
//             <h6>Quick Links</h6>
//             <ul class="footer-links">
//               <li><a href="http://scanfcode.com/about/">About Us</a></li>
//               <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
//               <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
//               <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
//               <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
//             </ul>
//           </div>
//         </div>
//         <hr/>
//       </div>
//       <div class="container">
//         <div class="row">
//           <div class="col-md-8 col-sm-6 col-xs-12">
//             <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
//          <a href="#">Scanfcode</a>.
//             </p>
//           </div>

//           <div class="col-md-4 col-sm-6 col-xs-12">
//             <ul class="social-icons">
//               <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
//               <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
//               <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
//               <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
//             </ul>
//           </div>
//         </div>
//       </div>
// </footer>
      
//     </div>
//   );
// };

// export default Footer;
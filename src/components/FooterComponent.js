import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    // <div className="footer">
    //   <div className="container">
    //     <div className="row justify-content-center">
    //       <div className="col-4 offset-1 col-sm-2">
    //         <h5>Links</h5>
    //         <ul className="list-unstyled">
    //           <li>
    //             <Link to="/home">Home</Link>
    //           </li>
    //           <li>
    //             <Link to="/aboutus">About Us</Link>
    //           </li>
    //           <li>
    //             <Link to="/contactus">Contact Us</Link>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-12 col-sm-4 align-self-center">
    //         <div className="text-center">
    //           <h5>Follow us on</h5>
    //         </div>
    //         <div className="text-center">
    //           <a
    //             className="btn btn-social-icon btn-facebook"
    //             href="http://www.facebook.com/"
    //           >
    //             <i className="fa fa-facebook"></i>
    //           </a>
    //           <a
    //             className="btn btn-social-icon btn-linkedin"
    //             href="http://www.linkedin.com/"
    //           >
    //             <i className="fa fa-linkedin"></i>
    //           </a>
    //           <a
    //             className="btn btn-social-icon btn-twitter"
    //             href="http://twitter.com/"
    //           >
    //             <i className="fa fa-twitter"></i>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="footer">
        <div className="head1 "><h2>Contact Us</h2></div>
        <form className="main-form">
          <div className="det">
            {/* <h3>Name :</h3> */}
            <input type="text" name="sndername" id="name" placeholder="Enter Your Name"/>
          </div>
          <div className="det">
            {/* <h3>Email ID :</h3> */}
            <input type="text" name="snderemail" id="senderemail" placeholder="Enter Your Email ID" />
          </div>
          <div className="det">
            {/* <h3>Mobile No :</h3> */}
            <input type="text" name="sndermob" id="sndermob" placeholder="Enter Your Mobile No" />
          </div>
          <div className="det">
            {/* <h3>Address :</h3> */}
            <input type="text" name="sndername" id="snderaddress" placeholder="Enter Your Address" />
          </div>
          <div className="det">
            {/* <h3>Query :</h3> */}
            {/* <input type="textbox" name="sndername" id="name" /> */}
            <textarea name="query" id="query" cols="30" rows="10" placeholder="Enter Your Message And Send Us"></textarea>
            
          </div>
          <button className="buttonsub">Submit</button>
          <div className="text-center contact-url">
             <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
        </form>
    </div>
  );
}

export default Footer;

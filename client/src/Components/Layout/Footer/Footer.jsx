import { Link } from 'react-router-dom';

import Facebook from "../../../assets/Facebook.svg";
import Linkedin from "../../../assets/Linkedin.svg";
import Twitter from "../../../assets/Twitter.svg";
import Youtube from "../../../assets/Youtube.svg";
import "./Footer.scss";

function Footer() {
  return (
    <footer className='footer-container'>
        <div className="help-column" id="footer-column">
            <h4>Help</h4>
            <Link to="/">
              <p>FAQ</p>
            </Link>
            <Link to="/">
              <p>Blog</p>
            </Link>
            <Link to="/">
              <p>Support</p>
            </Link>
        </div>

        <div className="about-links-container" id="footer-column">
            <h4>About SOIL</h4>
            <Link to="/">
              <p>About us</p>
            </Link>
            <Link to="/">
              <p>Careers</p>
            </Link>
            <Link to="/">
              <p>Contact us</p>
            </Link>
        </div>

        <div className="helpful-link-column" id="footer-column">
            <h4>Helpful Links</h4>
            <Link to="/about">
              <p>About us</p>
            </Link>
            <Link to="/">
              <p>Careers</p>
            </Link>
            <Link to="/">
              <p>Contact us</p>
            </Link>
        </div>

        <div className="subscribe-container">
          <h4>Subscribe</h4>
          <div>
            <input type="email" placeholder="Email address" name="subscription-email" required />
          </div>
          <p>
            Hello, we are SOIL. Our goal is to foster a sustainable food
            ecosystem that values quality produce and promotes environmental
            stewardship for all.
          </p>
          <div className="social-media-container">
            <Link to="#">
              <img src={Facebook} alt="Facebook_Logo" id="social-media-logo" />
            </Link>
            <Link to="#">
              <img src={Twitter} alt="X_Logo" id="social-media-logo" />
            </Link>
            <Link to="#">
              <img src={Linkedin} alt="Linkedin_Logo" id="social-media-logo" />
            </Link>
            <Link to="#">
              <img src={Youtube} alt="Linkedin_Logo" id="social-media-logo" />
            </Link>
          </div>
        </div>
    </footer>
  );
}

export default Footer;


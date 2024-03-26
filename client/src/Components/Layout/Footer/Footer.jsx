import { Link } from 'react-router-dom';
import LogoFooter from "../../../assets/SOIL-logo.svg";
import Facebook from "../../../assets/Facebook.svg";
import Linkedin from "../../../assets/Linkedin.svg";
import Twitter from "../../../assets/Twitter.svg";
import Youtube from "../../../assets/Youtube.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-padding">
          <div className="Organic-Product-column">
              <h4>Organic Product</h4>
              <Link to="/">
                <p>Employee database</p>
              </Link>
              <Link to="/">
                <p>Payroll</p>
              </Link>
              <Link to="/">
                <p>Absences</p>
              </Link>
              <Link to="/">
                <p>Time tracking</p>
              </Link>
          </div>

          <div className="Help-Column">
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

          <div className="Diet-Nutrition-Column">
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

          <div className="Helpful-Link-Column">
              <h4>Helpful Links</h4>
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

          <div className="footer-subscribe">

            <h4>Subscribe</h4>
            <div className="subscribe-box">
                <input type="search" placeholder="Email address" />
            </div>
            <p>
              Hello, we are SOIL. Our goal is to foster Link sustainable food
              ecosystem that values quality produce and promotes environmental
              stewardship for all.
            </p>

          </div>

          <hr />

          <div className="bottom-footer">
            <img src={LogoFooter} alt="SOIL_Logo" className="LogoFooter" />

            <div className="policy">
              <Link to="/"><p>Terms</p></Link>
              <Link to="/"><p>Privacy</p></Link>
              <Link to="/"><p>Cookies</p></Link>
            </div>

            <div className="social-media">
              <Link to="#"><img src={Facebook} alt="Facebook_Logo" className="Facebook" /></Link>
              <Link to="#"><img src={Twitter} alt="X_Logo" className="Twitter" /></Link>
              <Link to="#"><img src={Linkedin} alt="Linkedin_Logo" className="Linkedin" /></Link>
              <Link to="#"><img src={Youtube} alt="Linkedin_Logo" className="Linkedin" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


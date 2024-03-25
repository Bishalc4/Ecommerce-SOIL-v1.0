import "./Footer.css";
import { BsArrowRightSquareFill } from "react-icons/bs";
import logo1 from "../../../assets/SOIL-logo.svg";
import Facebook from "../../../assets/Facebook.svg";
import Linkedin from "../../../assets/Linkedin.svg";
import Twitter from "../../../assets/Twitter.svg"; 
import Youtube from "../../../assets/Youtube.svg";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        
    <div className="footer">
      <div className="footer-padding">
        
        <div className="eachfooter-div">
          <h4>Organic Product</h4>
          <Link to="/">
            <p>Employee database</p>
          </Link>
          <Link href="/">
            <p>Payroll</p>
          </Link>
          <Link href="/">
            <p>Absences</p>
          </Link>
          <Link href="/">
            <p>Time tracking</p>
          </Link>
          <Link href="/">
            <p>Shift planner</p>
          </Link>
          <Link href="/">
            <p>Recruiting</p>
          </Link>
        </div>

        <div className="eachfooter-div">
          <h4>Help</h4>
          <Link href="/">
            <p>FAQ</p>
          </Link>
          <Link href="/">
            <p>Blog</p>
          </Link>
          <Link href="/">
            <p>Support</p>
          </Link>
        </div>

        <div className="eachfooter-div">
          <h4>About SOIL</h4>
          <Link href="/">
            <p>About us</p>
          </Link>
          <Link href="/">
            <p>Careers</p>
          </Link>
          <Link href="/">
            <p>Contact us</p>
          </Link>
        </div>

        <div className="eachfooter-div">
          <h4>Helpful Links</h4>
          <Link href="/">
            <p>About us</p>
          </Link>
          <Link href="/">
            <p>Careers</p>
          </Link>
          <Link href="/">
            <p>Contact us</p>
          </Link>
        </div>

        <div className="footer-subscribe">
          <h4>Subscribe</h4>
          <div className="subscribe-box">
            <input type="search" placeholder="Email address" />
            <BsArrowRightSquareFill className="sub-arrow-icon" />
          </div>
          <p>
            Hello, we are SOIL. Our goal is to foster Link sustainable food
            ecosystem that values quality produce and promotes environmental
            stewardship for all.
          </p>
        </div>

        <hr />

        <div className="bottom-footer"> 
        <img src={logo1} alt="SOIL_Logo" className="logo1"/>

        <div className="policy">
        <Link href="/"> <p>Terms</p> </Link>
        <Link href="/"> <p>Privacy</p> </Link>
        <Link href="/"> <p>Cookies</p> </Link>
        </div>


        <div className="social-media"> 
        <Link href="#"> <img src={Facebook} alt="Facebook_Logo" className="Facebook"/> </Link>
        <Link href="#"> <img src={Twitter} alt="X_Logo" className="Twitter"/> </Link>
        <Link href="#"> <img src={Linkedin} alt="Linkedin_Logo" className="Linkedin"/> </Link>
        <Link href="#"> <img src={Youtube} alt="Linkedin_Logo" className="Linkedin"/> </Link>
        </div>
        
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;

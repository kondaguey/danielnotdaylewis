import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const date = new Date();
const year = date.getFullYear();
 
function Footer() {
  return (
  <div className="footer">

    <ul className="nav">

      <li className="nav__item">
        <a href="/">Privacy Policy</a>
      </li>

      <li className="nav__item">
        <a href="/">Request Estimate</a>
      </li>

      <li className="nav__item">
        <i><AiFillGithub/></i>
        <a href="https://github.com/kondaguey" target="_blank" rel="noreferrer">Github</a>
      </li>

      <li className="nav__item">
        <i><AiFillLinkedin/></i>
        <a href="https://www.linkedin.com/in/daniel-lewis-55a903195/" target="_blank" rel="noreferrer">LinkedIn</a>
      </li>

    </ul>

    <p className="copyright">
      &copy;{year} by Daniel Lewis
      {/* <img src="" alt="logo" className="footer__logo" /> */}
    </p>

  </div>
  );
}

export default Footer;
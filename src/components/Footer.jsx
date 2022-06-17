import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
  <div className="footer">
    <ul className="nav">
      <li className="nav__item">
        <a href="#" className="nav__link">Privacy Policy</a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">Request Estimate</a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">Github</a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">LinkedIn</a>
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
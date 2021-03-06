/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { SiMedium, SiTwitter, SiStackoverflow } from "react-icons/si";
import { FaPeopleCarry } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <ul className="footer__nav">
        <li className="footer__nav__item">
          <a
            href="https://medium.com/@daniel_notday_lewis"
            className="footer__nav__item-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer__nav__item-logo">
              <SiMedium />
            </span>
            Medium
          </a>
        </li>
        <li className="footer__nav__item">
          <a
            href="https://twitter.com/daniel_nd_lewis"
            target="_blank"
            className="footer__nav__item-link"
            rel="noreferrer"
          >
            <span className="footer__nav__item-logo">
              <SiTwitter />
            </span>
            Twitter
          </a>
        </li>
        <li className="footer__nav__item">
          <a
            href="https://stackoverflow.com/users/17514943/daniel"
            target="_blank"
            className="footer__nav__item-link"
            rel="noreferrer"
          >
            <span className="footer__nav__item-logo">
              <SiStackoverflow />
            </span>
            Stack Overlfow
          </a>
        </li>
        <li className="footer__nav__item">
          <a href="/collab" className="footer__nav__item-link">
            <span className="footer__nav__item-logo">
              <FaPeopleCarry />
            </span>
            Collab
          </a>
        </li>
        <li className="footer__nav__item">
          <a href="/privacypolicy" className="footer__nav__item-link">
            <span className="footer__nav__item-logo">
              <HiOutlineSpeakerphone />
            </span>
            Disclaimers
          </a>
        </li>
      </ul>

      <div className="footer__copyright">
        <p className="footer__copyright-year">&copy;{year} by Daniel Lewis</p>
        <img
          className="footer__copyright-img"
          src="./img/dndl-logo-white.png"
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Footer;

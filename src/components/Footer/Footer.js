import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <ul className="footer-socials">
          <li>
            <a href="mailto: sanskaryerawar@gmail.com">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a href="https://github.com/Sanskar6000">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sanskar-yerawar-056307205/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Sanskar6000">
              <FaTwitter />
            </a>
          </li>
        </ul>
        <h3>Made by Sanskar Yerawar</h3>
      </div>
    </footer>
  );
}

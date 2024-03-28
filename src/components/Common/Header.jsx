import React from "react";
import { ReactComponent as Logo } from "../../assets/atlas.svg";

const Header = () => {
  return (
    <section className="navigation">
      <div className="logo">
        <a href="/">
          <Logo />
        </a>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <button>Features</button>
            <ul className="submenu">
              <li>
                <a href="/forms">Forms</a>
              </li>
              <li>
                <a href="/analytics">Analytics</a>
              </li>
              <li>
                <a href="/cookie-solution">Cookie Solution</a>
              </li>
              <li>
                <a href="/features/blog">Blogs</a>
              </li>
              <li>
                <a href="/multilingual-websites">Multilingual Sites</a>
              </li>
              <li>
                <a href="/user-management">User Management</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/showcase">Showcase</a>
          </li>
        </ul>
      </nav>
      <div className="actions">
        <a href="https://app.umso.com/login" className="btn">
          Login
        </a>
        <a href="https://app.umso.com/signup" className="btn">
          Sign Up
        </a>
      </div>
    </section>
  );
};

export default Header;

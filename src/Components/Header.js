import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="left">
          <p>
            Monthly <span>pay</span>
          </p>
        </div>
        <div className="right">
          <span>About</span>
          <span>Blog</span>
          <span>Monthly Baskets</span>
          <span>Contact</span>
          <button>Get your monthly card</button>
        </div>
      </nav>
      <header>
        <div class="container header__container">
          <div class="header__left">
            <h1>India's first Neo bank for Monthly Payments </h1>
            <p>Saving from Spendings</p>
          </div>

          <div class="header__right">
            <div class="header__right-image">
              <video autoPlay muted loop src="/video1.mp4"></video>
            </div>
          </div>
        </div>
      </header>
      <footer>
        <div className="container-1"></div>
      </footer>
    </div>
  );
};

export default Header;

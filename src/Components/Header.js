import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="left">
          <p>
            <>Monthly</> <span className="monthly-new">Pay</span>
            {/* <img className="rbus" src="/rbus.png" alt="" /> */}
          </p>
        </div>
        <div className="right">
          <span className="item-2">About</span>
          <span className="item-3">Blog</span>
          <span className="item-4">Monthly Baskets</span>
          <span className="item-5">Contact</span>
          <button>Get your Monthly Card</button>
        </div>
      </nav>
      <header>
        <div class="container header__container">
          <div class="header__left">
            <h1>
              India's first Neo bank for{" "}
              <span style={{ color: "rgb(0, 184, 153)" }}>Monthly</span>{" "}
              Payments{" "}
            </h1>
            <p>(Savings from Spendings)</p>
          </div>

          <div class="header__right">
            <div class="header__right-image">
              <img
                src="https://media3.giphy.com/media/NkQu1zXYW7gmlCFHXb/giphy.gif?cid=790b76117b97fd3ceda55a2e33f9d3d9f77fcf0db58dbbde&rid=giphy.gif&ct=g"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>

      {/*   <footer>
        <div className="container-1">
          <div className="paragraph">
            <p className="para">
              Download <span className="monthly">Monthly</span> Pe Now
            </p>
            <a href="#">
              <img className="store" src="/google.png" alt="" />

              <img className="store-apple" src="/appple.png" alt="" />
            </a>
          </div>
        </div>
      </footer> */}

      <div className="container-new">
        <div className="image">
          {/* <img src="/credit-new" alt="" /> */}
          <video autoPlay loop muted src="/video-new.mp4"></video>
        </div>
      </div>
    </div>
  );
};

export default Header;

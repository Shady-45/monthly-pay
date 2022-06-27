import React from "react";
import { Parallax } from "react-parallax";
import "./Header.css";

const Header = () => {
  return (
    <Parallax strength={600}>
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
            {" "}
            <img src="/credit-new" alt="" />
          </div>
          <div className="content-new-2">
            <h1>Hey, I am Monthly Pay</h1>
            <div className="para-new-2">
              <p className="p1">
                &#8608; I am a numberless prepaid card just for teens
              </p>
              <p className="p2">
                &#8608; I can be personalised to suit your style
              </p>
              <p className="p3">
                &#8608; I make payments online and offline with just a tap
              </p>
              <p className="p4">
                &#8608; I am super safe and have no hidden fees
              </p>
            </div>
          </div>
          {/* <div className="new-video">
            <img src="/new-3.gif" alt="" />
          </div> */}
        </div>

        <div className="new-container-3">
          {/* <img src="/screen-1.gif" alt="" />
          <img src="/screen-2.gif" alt="" />
          <img src="/screen-3.gif" alt="" /> */}
          {/*           <video
            className="vi-new-1"
            width="300"
            loop
            autoPlay={true}
            muted
            playsInline
          >
            <source src="vi-new.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </Parallax>
  );
};

export default Header;

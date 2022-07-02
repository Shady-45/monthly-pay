import React from "react";
import "./Fourth.css";

const Fourth = () => {
  return (
    <div>
      <section class="categories" data-aos="zoom-in">
        <div class="container categories__container">
          <div class="categories__left">
            <h1>Gen Z</h1>
            {/*  <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              cupiditate perspiciatis illo, sed dolorem facere possimus ipsum
              fugit error fuga.
            </p> */}
          </div>
          <div class="categories__right">
            <article class="category">
              {/*  <span class="category__icon">
                  <i class="uil uil-bitcoin-circle"></i> 
              </span>  */}
              {/* <h5>ReactJS</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, sunt.
              </p> */}
              <img src="/pano-4.svg" data-aos="fade-left" alt="" />
            </article>

            <article class="category">
              {/* <span class="category__icon" /> */}
              <img src="/id-card.png" data-aos="fade-left" alt="" />
            </article>

            <article class="category">
              {/*  <span class="category__icon">
                <i class="uil uil-bitcoin-circle"></i>
              </span>
              <h5>ReactJS</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, sunt.
              </p> */}
              <img src="/pano-3.svg" data-aos="fade-left" alt="" />
            </article>

            <article class="category">
              {/* <span class="category__icon">
                <i class="uil uil-usd-circle"></i>
              </span>
              <h5>Javascript</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, sunt.
              </p> */}
              {/* <img src="/discount.png" alt="" /> */}
              <img src="/discount.png" data-aos="fade-right" alt=""></img>
            </article>

            <article class="category">
              {/* <span class="category__icon">
                <i class="uil uil-bitcoin-circle"></i>
              </span>
              <h5>ReactJS</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, sunt.
              </p> */}
              <img src="/online-groceries.png" data-aos="fade-right" alt="" />
            </article>

            <article class="category">
              {/*  <span class="category__icon">
                <i class="uil uil-bitcoin-circle"></i>
              </span>
              <h5>Monthly Pay</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, sunt.
              </p> */}
              <img
                /* style={{ height: "260px" }} */ src="/gift-card.png"
                alt=""
                data-aos="fade-right"
              />
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fourth;

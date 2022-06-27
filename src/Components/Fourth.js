import React from "react";
import "./Fourth.css";

const Fourth = () => {
  return (
    <div>
      <section class="categories">
        <div class="container categories__container">
          <div class="categories__left">
            <h1>Monthly Pay</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              cupiditate perspiciatis illo, sed dolorem facere possimus ipsum
              fugit error fuga.
            </p>
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
              <img src="/pano-1.svg" alt="" />
            </article>

            <article class="category">
              {/* <span class="category__icon" /> */}
              <img src="/pano-2.svg" alt="" />
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
              <img src="/pano-3.svg" alt="" />
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
              <img src="/pano-4.svg" alt="" />
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
              <img src="/pano-5.svg" alt="" />
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
              <img src="/pano-6.svg" alt="" />
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fourth;

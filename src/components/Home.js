import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header>
        <img src="img\HOWL.png" className="logo" alt="" />
        <img src="img\menu.png" alt="" className="logo2" />
      </header>
      <div>
        <div className="main-div">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="para-1">
              We exist because we want to help you navigate <br />
              and harness the potential of this ever-changing <br /> digital
              landscape.
            </p>
            <h1>
              <span class="word">YOUR</span>
              <span class="word">GROWTH</span>
              <span class="word">PARTNERS</span>
            </h1>
          </div>

          <div>
            <img src="img\home.png" alt="" className="main-img" />
            <img src="img\home2.png" className="sec-img" alt="" />
          </div>
        </div>
        <div style={{ height: "60px" }}>
          <p className="para-2">
            It's not a game of guesses, it's a game of numbers where growth is
            the <br /> ultimate goal. We leverage cutting-edge technology and
            data-driven <br /> insights to help you answer questions that unlock
            growth.
          </p>
        </div>
      </div>
      <section className="section-main">
        <div className="section-child1">
          <div>
            <ul className="list-main">
              <li className="list-child">STARTAGY AND CONSULTING</li>
              <li className="list-child">ONLINE MARKETING EXPERENCE</li>
              <li className="list-child">COMMERCE SOLUTIONS</li>
              <li className="list-child">GROWTH MARKETING</li>
              <li className="list-child">ASSET CREATION</li>
            </ul>
          </div>
          <div className="btn-main">
            <button className="section-btn" id="first-btn">
              Layer 1- stargic process steps
            </button>
            <button className="section-btn" id="sec-btn">
              Layer 2- Inputs & Intel Undertaken
            </button>
            <button className="section-btn" id="third-btn">
              Layer 3- Strategic Output
            </button>
            <button className="section-btn" id="fourth-btn">
              Layer 4- Branding Headers
            </button>
            <button className="section-btn" id="fifth-btn">
              Layer 5- branding output
            </button>
          </div>
        </div>
        <div className="section-child2">
          <div className="container">
            <div className="box">Consumer Reserch & Mapping </div>
            <div className="box">Box 2</div>
            <div className="box">Box 3</div>
            <div className="box">Box 4</div>
            <div className="box-child">Box 5</div>
            <div className="box-child">Box 6</div>
            <div className="box-child">Box 7</div>
            <div className="box8">Box 8</div>
            <div className="box-child2">
              <ul className="box-ul">
                <li className="box-li">Audience Depth</li>
                <li className="box-li">Interest Segregation</li>
                <li className="box-li">Consuption Patterns</li>
                <li className="box-li">Attintion Behavior</li>
                <li className="box-li">Development Metrics</li>
                <li className="box-li">Counsumr Archetype Defination</li>
              </ul>
            </div>
            <div className="box-child2">
              <ul className="box-ul">
                <li className="box-li">Primery & Secoundry Consumer Reserch</li>
                <li className="box-li">Competision Mapping Matrix</li>
                <li className="box-li">Customer Exprence Mission & Vision</li>
                <li className="box-li">Objective planning</li>
                <li className="box-li">Success Tenets Definition</li>
              </ul>
            </div>
            <div className="box-child2">
              <ul className="box-ul">
                <li className="box-li">Product/Service Qty Growth Mapping</li>
                <li className="box-li">Budget Planning</li>
                <li className="box-li">Revenue Planning</li>
                <li className="box-li">Pricing Decisions</li>
                <li className="box-li">POS Planning</li>
                <li className="box-li">Logistic Challange Mapping</li>
              </ul>
            </div>
            <div className="box12">
              <ul className="box-ul">
                <li className="box-li">Reserch,Review & Recommendation</li>
                <li className="box-li">Naming of the Brand</li>
                <li className="box-li">Mood-boarding</li>
                <li className="box-li">Logo Design</li>
                <li className="box-li">Visiual Identity</li>
                <li className="box-li">Brand Guidline</li>
                <li className="box-li">Digital Asset Treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section-main2">
        <h1 className="brand-h1">Clients we work with</h1>
        <div className="img-row">
        <img className="img-brand" src="img\hrx1.jpg" alt="" />
        <img className="img-brand" src="img\hrx1.jpg" alt="" />
        <img className="img-brand" src="img\AMEX.jpg" alt="" />
        <img className="img-brand" src="img\AMEX.jpg" alt="" />
        <img className="img-brand" src="img\Floh.jpg" alt="" />
        <img className="img-brand" src="img\Artboard.jpg" alt="" />
        <img className="img-brand" src="img\howl-thumbnail.jpg" alt="" />
        <img className="img-brand" src="img\howl-thumbnail.jpg" alt="" />
      </div>
      <div className="img-row">
        <img className="img-brand" src="img\Howl-Website.jpg" alt="" />
        <img className="img-brand" src="img\Howl-Website.jpg" alt="" />
        <img className="img-brand" src="img\howl-thumbnail.jpg" alt="" />
        <img className="img-brand" src="img\brand10.png" alt="" />
        <img className="img-brand" src="img\mens.jpg" alt="" />
        <img className="img-brand" src="img\brand7.png" alt="" />
        <img className="img-brand" src="img\MBF.jpg" alt="" />
        <img className="img-brand" src="img\MBF.jpg" alt="" />
      </div>
      </section>
      <footer>
        <div className="foot-div1">
          <h1 className="foot-h1">
            Keep track <br /> of the wolves <br />{" "}
            <img src="img\feedArrow.png" alt="" />
          </h1>
          <img className="foot1-img" src="img\footer1.png" alt="" />
          <img className="foot1-img" src="img\footer2.png" alt="" />
          <img className="foot1-img" src="img\footer3.png" alt="" />
        </div>
        <div className="foot-div2">
          <a href="https://www.instagram.com/howlhq/">
            <img src="img\instragram.png" alt="" className="foot2-img" />
          </a>
          <a className="foot-a" href="https://howl.in/about/">
            PRESS
          </a>
          <a className="foot-a" href="https://howl.in/careers/">
            CAREERS
          </a>
          <a className="foot-a" href="https://howl.in/careers/">
            JOIN THE PACK
          </a>
          <a href="https://howl.in/">
            <button className="foot-btn">Sign up to our newsletter</button>
          </a>
          <p className="foot-p">
            All rights reseverd Designied, developed & powerd by HOWL Dightal
            Agency
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;

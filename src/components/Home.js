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
        <div style={{display:"flex", flexDirection:"column"}}>
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
      <div style={{height:"60px"}}>
          <p className="para-2">
            It's not a game of guesses, it's a game of numbers where growth is
            the <br /> ultimate goal. We leverage cutting-edge technology and
            data-driven <br /> insights to help you answer questions that unlock
            growth.
          </p>
        </div>
        </div>
       
       
    </>
  );
};

export default Home;

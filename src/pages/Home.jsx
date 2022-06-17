import React from "react";
import Navigation from "../components/Navigation";

function Home() {
  return (

    <div className="home__grid">

      <Navigation />
      <div className="home__title">

        <h1 className="home__title-heading">Hey there. I'm Daniel (not Day) Lewis.<br/>I do not drink your milkshake.</h1>
        <a href="https://www.youtube.com/watch?v=a5d9BrLN5K4" target="_blank" className="home__title-emoji" rel="noreferrer">🥤</a>
        <h2 className="home__title-subheading">But I will show you my portfolio and experience.</h2>
  
      </div>

      <div className="home__menu">
      
          <a className="home__menu-selection" href="/developer">
            <span>👨‍💻<br/><p>/developer</p></span>
          </a>

          <a className="home__menu-selection" href="/copywriter">
            <span>✍️<br/><p>/copywriter</p></span>
          </a>

          <a className="home__menu-selection" href="/actor">
            <span >🎭<br/><p>/actor</p></span>
          </a>
           
      </div>

      <h3>See you on the inside.</h3>

    </div>
  );
}

export default Home;
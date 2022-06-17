import React from "react";
import Navigation from "../components/Navigation";

function Home() {
  return (
    <div className="home__grid">
      <Navigation />

      <div className="home__title">

        <h1 className="home__title-heading">Hey there. I'm Daniel (not Day) Lewis.<br/>I do not drink your milkshake.</h1>
        <a href="https://www.youtube.com/watch?v=a5d9BrLN5K4" target="_blank" className="home__title-emoji" rel="noreferrer">🥤</a>

      </div>

      <div className="home__menu">

        <div className="home__menu-subheading">
          <h2>But I will show you my portfolio. You've two options.</h2>
          <h3>See you on the inside.</h3>
        </div>
        
        <div className="home__menu__selections">
          <span className="home__menu__selections-emoji">👨‍💻<p>/developer</p></span>
          
          <span className="home__menu__selections-emoji">✍️<p>/copywriter</p></span>
          
          <span className="home__menu__selections-emoji">🎭<p>/actor (🚧construction zone🚧)</p></span>
          
          <span className="home__menu__selections-emoji">🧑‍🎨<p>/designer (🚧construction zone🚧)</p></span>
          
        </div>  

      </div>

    </div>
  );
}

export default Home;
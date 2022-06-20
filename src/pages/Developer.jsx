/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import MenuBar from "../components/MenuBar";
import Card from "../components/Card";

function Developer() {
  return (
  <div className= "dev">

    <div className="dev__header">
      <h1>/developer</h1>
    </div>

    <div className="dev__skills">

      <div className="dev__skills__skill-1">
          <h3>Structure and Styles</h3>
          <img src="./img/tech-logo-1.png" alt="img" />
          <p>The Sass Logo is the biggest, because that's what I like best. I've taken great time and effort to work with this pre-processor in an advanced fashion. I use 7-1 file architecture with BEM-naming conventions and don't think I can ever do anythng differently anymore.</p>
      </div>

      <div className="dev__skills__skill-2">
        <h3>JS Stack</h3>
        <img src="./img/tech-logo-2.png" alt="img" />
        <p>Admittedly, I did not choose to focus as hard on vanilla JavaScript as on React. But my proficiency in node JS makes me feel OK about this. Both can be frustrating in their own right but having the ability to be a backend developer using Node.js Gives me a reprieve from the frustration of front and development and vice versa.</p>
      </div>

      <div className="dev__skills__skill-3">
        <h3>NoSQL DB Stack</h3>
        <img src="./img/tech-logo-3.png" alt="img" />
        <p>Given that I've become quite fond of the MERN Stack, naturally MondoDB, enhanced with Mongoose.js is my go-to database.</p>
      </div>

      <div className="dev__skills__skill-4">
        <h3>Blockchain / Web3 Stack</h3> 
        <img src="./img/tech-logo-4.png" alt="img" />
        <p>Ultimately, I'm going in the direction of web3. It's undoubtedly the next iteration of the web. Within the context of Web3 I'm trying to be on the bleeding-edge as much as possible. That's why I'm learning <a href="https://www.youtube.com/watch?v=4eSceDOS-Ms" target="_blank" >Motoko</a> from the <a href="https://dfinity.org/" target="_blank">DFINITY Foundation</a> to launch 100% on-chain DApps to the <a href="https://www.youtube.com/watch?v=rMuCZuPllEE" target="_blank">ICP</a> as well as Solidity, Hardhat, and Moralis.</p>
      </div>
    </div>

    <div className="dev__projects">

    <h2>portfolio</h2>

      <Card 
        project = "Rolling Real Estate"
        image = "./img/rolling.png"
        url="https://rolling-real-estate.pages.dev/"
        language="Advanced CSS"
        skill="Grids"
        
      />
      <Card 
        project = "Wanderlust"
        image = "./img/lust.png"
        url="https://kondaguey.github.io/wanderlust-css-portfolio/public/index.html"
        language="Advanced CSS"
        skill="Flexbox"
      />
      <Card 
        project = "Natours"
        image = "./img/natours.png"
        url="https://kondaguey.github.io/Natours/public/index.html"
        language="Advanced CSS"
        skill="Animations"
      />
      <Card 
        project = "Keeper App"
        image = "./img/keeper.png"
        url="https://kondaguey.github.io/another-keeper-app/"
        language="Intermediate React.js"
        skill="React Hooks "
      />

      <Card 
        project = " Under construction"
        image = "./img/construction.png"
        language="Advanced React.js, MERN"
        skill="Fullstack Web App Development"
      />

       <Card 
        project = "Under construction"
        image = "./img/construction.png"
        language="Solidity, Motoko"
        skill="Web3 Marketplace and DApp"
      />

    </div>
    
    <div className="dev__construct">

      <img src="./img/construct.png" alt="construct img" />

    </div>

  </div>
  );
}

export default Developer;
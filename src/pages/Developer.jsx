/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import MenuBar from "../components/MenuBar";
import Card from "../components/Card";

function Developer() {
  return (
    <div className="dev">
      <div className="dev__header">
        <h1>/developer</h1>
        <a icon="./img/favicon.png" href="./media/DeveloperResume.pdf" target="_blank">
          <h2>resume</h2>
        </a>
      </div>

      <div className="dev__skills">
        <div className="dev__skills__skill dev__skills__skill-1">
          <h3>Structure and Styles</h3>
          <img src="./img/tech-logo-1.png" alt="img" />
          <p>
            I've taken great time and effort to work with this pre-processor in
            an advanced fashion. My styling workflow looks like a nice combo of
            the 7-1 Sass file architecture with BEM-naming conventions.
          </p>
        </div>

        <div className="dev__skills__skill dev__skills__skill-2">
          <h3>JS Stack</h3>
          <img src="./img/tech-logo-2.png" alt="img" />
          <p>
            With vanilla Javascript down, I chose ReactJS as my go-to frontend
            library. I love working with components because it helps me tackle a
            series of smaller problems rather than feeling overwhelmed by one
            large one. Coupled with NodeJS, building server-side with Express,
            I've fallen into a nice stack that I see no need to stray away from
            for the time being.
          </p>
        </div>

        <div className="dev__skills__skill dev__skills__skill-3">
          <h3>NoSQL DB Stack</h3>
          <img src="./img/tech-logo-3.png" alt="img" />
          <p>
            Given that I've become quite fond of the MERN Stack, MondoDB
            enhanced with Mongoose is my database workflow of choice.
          </p>
        </div>

        <div className="dev__skills__skill dev__skills__skill-4">
          <h3>Blockchain / Web3 Stack</h3>
          <img src="./img/tech-logo-4.png" alt="img" />
          <p>
            Ultimately, I'm going the direction of web3 and the blockchain. It's
            undoubtedly the next iteration of the web. Within the context of
            web3 I'm walking on the cutting edge of tomorrow. That's why in
            addition to Solidity, I'm learning{" "}
            <a
              href="https://www.youtube.com/watch?v=4eSceDOS-Ms"
              target="_blank"
            >
               Motoko
            </a>{" "}
            from the{" "}
            <a href="https://dfinity.org/" target="_blank">
              DFINITY Foundation
            </a>{" "}
            to launch 100% on-chain DApps to the{" "}
            <a
              href="https://www.youtube.com/watch?v=rMuCZuPllEE"
              target="_blank"
            >
              ICP
            </a>
            . Throw in Hardhat, and Moralis for safe measure, and I'll be
            building web3 DApps versions of all my web2 Apps in no time.
          </p>
        </div>
      </div>

      <div className="dev__projects">
        <h2>works</h2>

        <p className="dev__projects__explainer">
          Aside from the projects listed below, this website itself is a living
          portfolio. It's a place for me to actively practice my craft of
          development and design in a safe place. As my skills and practice
          evolve, so will the website – becoming better and better with time.
          It's a direct reflection my my programming abilities in real time,
          where I can also collect and share anything else I'm learning and
          evolving. <br />
          <br />
          Ultimately, this could end up being a scaled enterprise app with
          functionality, with multiple businesses attached to it. The sky's the
          limit and I'm proud to make it my own.
        </p>

        <Card
          project="Rolling Real Estate"
          image="./img/rolling.png"
          url="https://rolling-real-estate.pages.dev/"
          language="Advanced CSS"
          skill="Grids"
        />
        <Card
          project="Wanderlust"
          image="./img/lust.png"
          url="https://kondaguey.github.io/wanderlust-css-portfolio/public/index.html"
          language="Advanced CSS"
          skill="Flexbox"
        />
        <Card
          project="Natours"
          image="./img/natours.png"
          url="https://kondaguey.github.io/Natours/public/index.html"
          language="Advanced CSS"
          skill="Animations"
        />
        <Card
          project="Keeper App"
          image="./img/keeper.png"
          url="https://kondaguey.github.io/another-keeper-app/"
          language="Intermediate React.js"
          skill="React Hooks "
        />

        <Card
          project=" Under construction"
          image="./img/construction.png"
          language="Advanced React.js, MERN"
          skill="Fullstack Web App Development"
        />

        <Card
          project="Under construction"
          image="./img/construction.png"
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

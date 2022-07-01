/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai';

function Copywriter() {
  const [embedURL] = useState(
    "https://docs.google.com/document/d/e/2PACX-1vSNbfQobuuvkFdfRQLYY04nUAFtjXkzTsaI4CBQ3HBVfnApEJNPb4s5oOPXZ_Sci5FqaScN7mpQGbZb/pub?embedded=true"
  );

  return (
    <div className="copy">
      {/* <div className="copy__header">
        <h1 className="copy__header-title typewriter-font">/copywriter</h1>
        <h2 className="copy__header-subtitle">selected work - transformational / content</h2>
      </div>

      <div className="copy__document">
        <iframe title="pdf" src={embedURL} width="800" height="1150">
       
        </iframe>
        
      </div> 

      <div className="copy__audio">
        <p>
          . . . being that I'm also a proferssional voice actor, I even decided
          to throw in a bonus voiceover of the article for the client. On the
          house.
        </p>
        <audio
          controls
          className="copy__audio-clip"
          src="./media/sample-audio.mp3"
        ></audio>
      </div>

      <div className="copy__feedback">
        <p>client feedback . . .</p>
        <img src="./img/feedback.png" alt="client feedback" />
      </div> */}

      

      <div className="copy__header">
        <h3>/copywriter</h3>
      </div>

      <div className="copy__container">

        <div className="copy__container__circle">

        <span className="copy__container__circle__arrow copy__container__circle__arrow-left"> <AiOutlineArrowLeft /></span>
        <span className="copy__container__circle__arrow copy__container__circle__arrow-up"><AiOutlineArrowUp /></span>
        <span className="copy__container__circle__arrow copy__container__circle__arrow-right"><AiOutlineArrowRight /></span>
        <p className="copy__container__circle__port">portfolio</p>
        <span className="copy__container__circle__arrow copy__container__circle__arrow-down-1"><AiOutlineArrowDown /></span>
        <span className="copy__container__circle__arrow copy__container__circle__arrow-down-2"><AiOutlineArrowDown /></span>
        </div>

        <div className="copy__container__direct">
        <a href="./media/CopywriterDirect.pdf" target="_blank"><h2>Direct</h2></a>
        </div>

        <div className="copy__container__transform">
        <h2>Transformative</h2>
        </div>

        <div className="copy__container__web3">
        <span>new!</span>
        <h2>Web3 Content</h2>
        </div>

        <div className="copy__container__content">
        <a href="./media/CopywriterContent.pdf" target="_blank"><h2>Content/<br/>SEO</h2></a>
        </div>

        <div className="copy__container__brand">
        <h2>Brand</h2>
        </div>

      </div>
    </div>
  );
}

export default Copywriter;

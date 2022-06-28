import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

function Copywriter() {
  const [embedURL] = useState(
    "https://docs.google.com/document/d/e/2PACX-1vSNbfQobuuvkFdfRQLYY04nUAFtjXkzTsaI4CBQ3HBVfnApEJNPb4s5oOPXZ_Sci5FqaScN7mpQGbZb/pub?embedded=true"
  );

  return (
    <div className="copy">
      <div className="copy__header">
        <h1 className="copy__header-title typewriter-font">/copywriter</h1>
        <h2 className="copy__header-subtitle">sample work</h2>
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
      </div>
    </div>
  );
}

export default Copywriter;

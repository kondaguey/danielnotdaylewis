import React from "react";

function Actor() {
  return (
    <div className="actor">
      <h3 className="actor__heading">/actor
      <span><a
        className="actor__resume"
        href="./media/ActorResume.pdf"
        target="_blank"
      >
        <h2>actor resume</h2>
      </a></span></h3>
      

      <h2 className="actor__subheading">Page currently under construction</h2>

      <p className="actor__paragraph">
        With the exception of some professional voiceover work, I'm on indefinite hiatus as I work on other career aspirations (i.e. development and design). <br /><br />But do check out my resume above if you're curious. {" "}
      </p>
    </div>
  );
}

export default Actor;

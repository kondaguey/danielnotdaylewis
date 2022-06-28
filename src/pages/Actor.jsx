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
        Oh, the stories I have from being a professional actor for ten years.
        While I am on hiatus I still dabble in voice acting, and given the
        opportunity I'd dabble in to stage and screen as well. Post-hiatus I
        traveled the world and began a dual-life in South Korea. Will update
        soon . . . I just wanted you to know this about me for the time being.
        Perhaps it makes me more creative and versatile in all of my other
        pursuits. Just an thought . . .{" "}
      </p>
    </div>
  );
}

export default Actor;

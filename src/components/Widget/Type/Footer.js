import React from "react";

function Footer() {
  return (
    <div className="widget footerWidget">
      <div className="projects">
        <div className="projectsTile">
          <a href="https://api.fern.fun/" target={"_blank"} rel="noreferrer">
            API
          </a>
        </div>
        <div className="projectsTile">
          <a href="https://pi.fern.fun/" target={"_blank"} rel="noreferrer">
            Server Dashboard
          </a>
        </div>
        <div className="projectsTile">
          <a href="https://game.fern.fun/" target={"_blank"} rel="noreferrer">
            Game
          </a>
        </div>
      </div>
      <div className="createdBy">
        <span>
          <span style={{ color: "#fd6888" }}>2020-2023</span> © Fern.fun
        </span>
      </div>
    </div>
  );
}

export default Footer;

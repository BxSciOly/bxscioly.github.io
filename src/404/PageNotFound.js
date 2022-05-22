import React from "react";
import emoji from "./img/emoji.png";
import "./css/style.css";

const PageNotFound = () => {
  return (
    <body>
      <div id="notfound">
        <div clasName="notfound">
          <div clasName="notfound-404">
            <h1>
              4<span></span>4
            </h1>
          </div>
          <h2>Oops! Page Not Found</h2>
          <p>
            Sorry but the page you are looking for does not exist, has been
            removed, or is temporarily unavailable
          </p>
          <a href="bxscioly.github.io">Back to homepage</a>
        </div>
      </div>
    </body>
  );
};

export default PageNotFound;

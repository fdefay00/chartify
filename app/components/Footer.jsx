import React from 'react';

export default () => {
  return (
    <footer>
      <div className="info">
        <div>
          <p>Developed By</p>
          <p>Fabrice Defay</p>
        </div>

        <p>
          <span>
            <img src="./img/GitHub-Mark-Light-32px.png" />
          </span>
          <a href="https://www.github.com/fdefay00"> fdefay00</a>
        </p>
        <p>
          <img src="./img/twitter-logo-blue.png" />
          <a href="https://www.twitter.com/fdefay00"> fdefay00</a>
        </p>
        <p>
          <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" />
          <a href="https://www.linkedin.com/in/fdefay00/">fdefay00</a>
        </p>
      </div>

      <div className="spotify">
        <h1> Powered By </h1>
        <img src="./img/Spotify_Logo_CMYK_White.png" />
      </div>
    </footer>
  );
};

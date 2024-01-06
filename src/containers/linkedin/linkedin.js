// LinkedIn.jsx

import React, { useContext } from "react";
import "./linkedin.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function LinkedIn() {
  const { isDark } = useContext(StyleContext);

  // Replace these iframe URLs with your actual LinkedIn post URLs
  const linkedinPostURLs = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7149137403369160704",
    // Add more LinkedIn post URLs for iframes as needed
  ];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text" >Posts</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {"With Love for Developing cool stuff, I love to write and teach others what I have learnt."}
          </p>
        </div>
        <div className="linkedin-main-div">
          <div className="linkedin-posts">
            {/* Display fixed number of LinkedIn posts as iframes */}
            {linkedinPostURLs.map((url, i) => (
              <iframe
                key={i}
                src={url}
                height="518"
                width="504"
                frameBorder="0"
                allowFullScreen=""
                title={`Embedded post ${i + 1}`}
                className="linkedin-iframe" // Add your custom styles for iframes
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

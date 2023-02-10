import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const softwareSkills = [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    }
  ];
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {softwareSkills.map((skills, i) => {
              return (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skills.skillName}
                >
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>Created with {skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Fade>
  );
}

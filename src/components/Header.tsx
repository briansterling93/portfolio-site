import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { IconsLogo } from "../styling/Header";

const Header: React.FC = () => {
  return (
    <IconsLogo>
      {" "}
      <div>
        <a href="https://github.com/briansterling93">
          <AiOutlineGithub className="logo-img" id="github-logo" />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/briansterling93/">
          <AiFillLinkedin className="logo-img" id="linkedin-logo" />
        </a>
      </div>
    </IconsLogo>
  );
};

export default Header;

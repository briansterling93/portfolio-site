import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { IconsLogo } from "../styling/Header";

const Header: React.FC = () => {
  function openInNewTab(url: any) {
    const fetch: any = window.open(url, "_blank");
    fetch.focus();
  }
  return (
    <IconsLogo>
      <div
        onClick={() => {
          openInNewTab("https://github.com/briansterling93");
        }}
      >
        <AiOutlineGithub className="logo-img" id="github-logo" />
      </div>
      <div
        onClick={() => {
          openInNewTab("https://www.linkedin.com/in/briansterling93/");
        }}
      >
        <AiFillLinkedin className="logo-img" id="linkedin-logo" />
      </div>
    </IconsLogo>
  );
};

export default Header;

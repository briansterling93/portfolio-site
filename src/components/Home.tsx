import React from "react";
import { MainSection, ItemArray } from "../styling/Home";
import { GoLogoGithub } from "react-icons/go";

export const Home: React.FC = () => {
  return (
    <MainSection>
      {/* <div id="icons-section">
        {" "}
        {/* <GoLogoGithub id="github-logo" size={50} /> */}
      {/* </div> */}
      <ItemArray>
        <p>
          <span className="title-span">Hey, I'm Brian.</span> <br />
          Front End Developer,
          <br />
          <span className="title-span">and ocean lover.</span>
        </p>
        <div id="btn-div">
          <button>View my work</button>
        </div>
      </ItemArray>
    </MainSection>
  );
};

export default Home;

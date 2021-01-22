import React from "react";
import {
  MainSection,
  ItemArray,
  Section1,
  Section2,
  LangSection,
} from "../styling/Skills";

const Skills: React.FC = () => {
  return (
    <MainSection>
      <ItemArray>
        {" "}
        <Section1>
          <div>
            {" "}
            <h1>My Skillset</h1>
          </div>
          <div id="section-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </Section1>
        <Section2>
          <LangSection>
            {" "}
            <div className="lang-div">
              {" "}
              <input value="React" type="button" />
            </div>
            <div className="lang-div">
              <input value="JavaScript" type="button" />
            </div>
            <div className="lang-div">
              <input value="mySQL" type="button" />
            </div>
            <div className="lang-div">
              <input value="sass" type="button" />
            </div>
            <div className="lang-div">
              <input value="css" type="button" />
            </div>
            <div className="lang-div">
              <input value="styled components" type="button" />
            </div>
            <div className="lang-div">
              <input value="ES6" type="button" />
            </div>
            <div className="lang-div">
              <input value="Express" type="button" />
            </div>
            <div className="lang-div">
              <input value="TypeScript" type="button" />
            </div>
            <div className="lang-div">
              <input value="NodeJS" type="button" />
            </div>
            <div className="lang-div">
              <input value="mongoDB" type="button" />
            </div>
            <div className="lang-div">
              <input value="Git" type="button" />
            </div>
            <div className="lang-div">
              <input value="UI design" type="button" />
            </div>
            <div className="lang-div">
              <input value="User experience" type="button" />
            </div>
          </LangSection>
        </Section2>
      </ItemArray>
    </MainSection>
  );
};

export default Skills;

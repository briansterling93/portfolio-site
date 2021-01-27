import React, { useEffect } from "react";
import {
  MainSection,
  ItemArray,
  Section1,
  Section2,
  LangSection,
} from "../styling/Skills";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <MainSection data-aos="fade">
      <ItemArray>
        {" "}
        <Section1>
          <div>
            {" "}
            <h1>My Skillset</h1>
          </div>
          <div id="section-p">
            As a determined self-taught programmer, I've placed continuous
            emphasis on ensuring quality results are consistently produced,
            while also staying attuned of the everchanging frameworks. I've
            learned and grasped the importance of ensuring products are user
            friendly, while also establishing code that is reusable and
            scalable.{" "}
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

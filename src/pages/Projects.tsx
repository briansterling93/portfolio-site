import React from "react";
import {
  MainSection,
  ItemArray,
  Section1,
  Section2,
  ProjectSection1,
  ProjectSection2,
} from "../styling/Projects";
import { BsArrowRight } from "react-icons/bs";
import fc1 from "../imgs/fc1.jpg";
import mr1 from "../imgs/mr1.jpg";

const Projects: React.FC = () => {
  return (
    <MainSection>
      <ItemArray>
        <Section1>
          <h1>Personal projects</h1>
        </Section1>
        <Section2>
          <ProjectSection1>
            {" "}
            <div className="projects-div">
              <img src={fc1} />
              <div>
                <h1>Fit Commerce</h1>
              </div>
              <div>
                <p>A fully functional e-commerce website.</p>
              </div>
              <div>
                <button>
                  View Project{" "}
                  <span id="btn-logo">
                    <BsArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </ProjectSection1>
          <ProjectSection2>
            {" "}
            <div className="projects-div">
              <img src={mr1} />
              <div>
                <h1>Mars Rover Api</h1>
              </div>
              <div>
                <p>Live snapshots taken from NASA's Mars Rover.</p>
              </div>
              <div>
                <button>
                  View Project{" "}
                  <span id="btn-logo">
                    <BsArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="projects-div">
              <img src={mr1} />
              <div>
                <h1>Mars Rover Api</h1>
              </div>
              <p>Live snapshots taken from Mars, with use of NASA api</p>
            </div>
          </ProjectSection2>
        </Section2>
      </ItemArray>
    </MainSection>
  );
};

export default Projects;

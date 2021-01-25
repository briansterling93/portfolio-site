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
import dr from "../imgs/dr.jpg";
import fp from "../imgs/fp.jpg";
import dr1 from "../imgs/gifs/dr1.gif";
import fc from "../imgs/gifs/fc.gif";
import mr from "../imgs/gifs/mr.gif";
import fitplate from "../imgs/gifs/fitplate.gif";

const Projects: React.FC = () => {
  function openInNewTab(url: any) {
    const fetch: any = window.open(url, "_blank");
    fetch.focus();
  }
  return (
    <MainSection>
      <ItemArray>
        <Section1>
          <h1>Personal projects</h1>
        </Section1>
        <Section2>
          {" "}
          <div className="projects-div">
            <div id="img-div">
              <div className="img-spacer">
                {" "}
                <img src={fc1} />
              </div>
              <div className="img-spacer">
                <img src={fc} />
              </div>
            </div>
            <div>
              <h1>Fit Commerce</h1>
            </div>
            <div>
              <p>A fully functional e-commerce website.</p>
            </div>
            <div>
              <p>
                <b>Tech Stack:</b>{" "}
                <span id="tecstack-div">
                  React, Typescript, Styled Components, Node, Express, mySQL,
                  Sequelize, JWT Authentication
                </span>{" "}
              </p>
            </div>
            <div>
              <b>
                <div id="github-div">
                  <button
                    onClick={() => {
                      openInNewTab(
                        "https://github.com/briansterling93/fit-commerce"
                      );
                    }}
                  >
                    View Code
                  </button>
                </div>
              </b>

              <p id="testaccnt-div">
                <i>
                  *If you do not wish to create an account, feel free to use the
                  below credentials:*
                </i>
                <br />
                <span className="credentials-title">Username:</span>{" "}
                test@test.com{" "}
                <span className="credentials-title">Password:</span> Password
              </p>
            </div>
            <div>
              <p></p>
            </div>

            <div>
              <button
                onClick={() => {
                  openInNewTab("https://fitness-commerce.herokuapp.com/");
                }}
              >
                View Project{" "}
                <span id="btn-logo">
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </div>{" "}
          <div>
            {" "}
            <div className="projects-div">
              <div id="img-div">
                <div className="img-spacer">
                  {" "}
                  <img src={dr} />
                </div>
                <div className="img-spacer">
                  <img src={dr1} />
                </div>
              </div>
              <div>
                <h1>Dev Remote</h1>
              </div>
              <div>
                <p>
                  A website that allows users to search available roles and post
                  jobs.
                </p>
              </div>
              <div>
                <p>
                  <b>Tech Stack:</b>{" "}
                  <span id="tecstack-div">
                    JavaScript, React, sass, mySQL, Express, Node, and Sequelize
                  </span>{" "}
                </p>
              </div>
              <div>
                <b>
                  <div id="github-div">
                    <button
                      onClick={() => {
                        openInNewTab(
                          "https://github.com/briansterling93/job-board"
                        );
                      }}
                    >
                      View Code
                    </button>
                  </div>
                </b>
              </div>
              <div>
                <p></p>
              </div>
              <div>
                <button
                  onClick={() => {
                    openInNewTab("https://devvv-remote.herokuapp.com/");
                  }}
                >
                  View Project{" "}
                  <span id="btn-logo">
                    <BsArrowRight />
                  </span>
                </button>
              </div>{" "}
            </div>
          </div>
          <div>
            {" "}
            <div className="projects-div">
              <div id="img-div">
                <div className="img-spacer">
                  {" "}
                  <img src={mr1} />
                </div>
                <div className="img-spacer">
                  <img src={mr} />
                </div>
              </div>
              <div>
                <h1>Mars Rover</h1>
              </div>
              <div>
                <p>
                  Photography information pulled with REST API calls to NASA's
                  Mars Rover database.
                </p>
              </div>
              <div>
                <p>
                  <b>Tech Stack:</b>{" "}
                  <span id="tecstack-div">
                    React, Typescript, styled Components, Axios, NASA's Rover
                    API
                  </span>{" "}
                </p>
              </div>
              <div>
                <b>
                  <div id="github-div">
                    <button
                      onClick={() => {
                        openInNewTab(
                          "https://github.com/briansterling93/mars-rover"
                        );
                      }}
                    >
                      View Code
                    </button>
                  </div>
                </b>
              </div>
              <div>
                <p></p>
              </div>
              <div>
                <button
                  onClick={() => {
                    openInNewTab("https://mars-roverr.web.app");
                  }}
                >
                  View Project{" "}
                  <span id="btn-logo">
                    <BsArrowRight />
                  </span>
                </button>
              </div>
              <div>
                {" "}
                <div className="projects-div">
                  <div id="img-div">
                    <div className="img-spacer">
                      {" "}
                      <img src={fp} />
                    </div>
                    <div className="img-spacer">
                      <img src={fitplate} />
                    </div>
                  </div>
                  <div>
                    <h1>Fit Plate</h1>
                  </div>
                  <div>
                    <p>
                      Food Data pulled with REST API calls to FoodDataCentral
                      databases
                    </p>
                  </div>
                  <div>
                    <p>
                      <b>Tech Stack:</b>{" "}
                      <span id="tecstack-div">
                        JavaScript, React, sass, and the FoodDataCentral Api.
                      </span>{" "}
                    </p>
                  </div>
                  <div>
                    <b>
                      <div id="github-div">
                        <button
                          onClick={() => {
                            openInNewTab(
                              "https://github.com/briansterling93/Fit-Plate"
                            );
                          }}
                        >
                          View Code
                        </button>
                      </div>
                    </b>
                  </div>
                  <div>
                    <p></p>
                  </div>
                  <div>
                    {" "}
                    <button
                      onClick={() => {
                        openInNewTab("https://fit-plate.firebaseapp.com/");
                      }}
                    >
                      View Project{" "}
                      <span id="btn-logo">
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </Section2>
      </ItemArray>
    </MainSection>
  );
};

export default Projects;

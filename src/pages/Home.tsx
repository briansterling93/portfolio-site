import React from "react";
import { MainSection, ItemArray } from "../styling/Home";
import ImgHeader from "../components/ImgHeader";
import Header from "../components/Header";

export const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <MainSection>
        <ItemArray>
          <div>
            <ImgHeader />
          </div>
          <p>
            <span className="title-span">Hey there! I'm Brian.</span> <br />
            Front End Developer,
            <br />
            <span className="title-span">and coffee lover.</span>
          </p>
          <div id="btn-div">
            <button>View projects</button>
          </div>
        </ItemArray>
      </MainSection>
    </div>
  );
};

export default Home;

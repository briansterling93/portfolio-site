import React, { useEffect } from "react";
import { MainSection, ItemArray } from "../styling/Home";
import { BsChevronDoubleDown } from "react-icons/bs";
import ImgHeader from "../components/ImgHeader";
import Header from "../components/Header";

import Aos from "aos";
import "aos/dist/aos.css";

export const Home: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>

      <MainSection>
        <ItemArray data-aos="fade">
          <div>
            <ImgHeader />
          </div>
          <p>
            <span className="title-span">Hey there! I'm Brian.</span> <br />
            Front End Developer,
            <br />
            <span className="title-span">and coffee lover.</span>
          </p>
          <div id="btn-div" data-aos="fade-out">
            {/* <button>View projects</button> */}
            <span id="arrow-1">
              {" "}
              <BsChevronDoubleDown />
            </span>
            <span id="arrow-2">
              {" "}
              <BsChevronDoubleDown />
            </span>
            <span id="arrow-3">
              {" "}
              <BsChevronDoubleDown />
            </span>
          </div>
        </ItemArray>
      </MainSection>
    </div>
  );
};

export default Home;

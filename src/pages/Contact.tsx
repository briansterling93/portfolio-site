import React from "react";
import { MainSection, ItemArray, Section1 } from "../styling/Contact";
import Header from "../components/Header";

const Contact: React.FC = () => {
  return (
    <MainSection>
      <ItemArray>
        <Section1>
          Looking for a Developer? Feel free to contact me.
          <div id="contact-p">
            <p>
              Whether you are seeking asistance with a web app, website, or
              you're looking to fill a full time position. Feel free to reach
              out, as I am always open to discuss{" "}
            </p>
          </div>
          <div id="email-div">briansterling93@yahoo.com</div>
        </Section1>
      </ItemArray>
      <Header />
    </MainSection>
  );
};

export default Contact;

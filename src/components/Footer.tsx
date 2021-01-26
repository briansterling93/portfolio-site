import React from "react";
import { MainSection, ItemArray } from "../styling/Footer";

const Footer: React.FC = () => {
  return (
    <MainSection>
      <ItemArray>
        <p>
          <span id="poweredby-span">Powered by:</span> Brian Sterling
        </p>
      </ItemArray>
    </MainSection>
  );
};

export default Footer;

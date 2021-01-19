import React from "react";
import img3 from "../imgs/img3.jpg";
import { ImgDiv } from "../styling/ImgHeader";

const ImgHeader: React.FC = () => {
  return (
    <ImgDiv>
      {" "}
      <img src={img3} />
    </ImgDiv>
  );
};

export default ImgHeader;

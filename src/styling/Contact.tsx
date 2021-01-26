import styled from "styled-components";

export const MainSection = styled.div`
  min-height: 20rem;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
`;

export const ItemArray = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 80rem;
  font-size: 1.8rem;
  font-weight: 600;

  #contact-p {
    font-weight: 350;
    font-size: 1rem;
  }

  #email-div {
    font-size: 1.3rem;
    text-decoration: underline;
    font-weight: 600;
  }
`;

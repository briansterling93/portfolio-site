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

  @media only screen and (max-width: 1350px) {
    width: 40rem;
    font-size: 1.4rem;

    #contact-p {
      font-weight: 350;
      font-size: 0.9rem;
    }

    #email-div {
      font-size: 1.1rem;
      text-decoration: underline;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 900px) {
    width: 25rem;

    #contact-p {
      font-weight: 300;
      font-size: 0.9rem;
    }

    #email-div {
      font-size: 1rem;
      text-decoration: underline;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 20rem;
  }

  @media only screen and (max-width: 520px) {
    width: 17rem;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 430px) {
    width: 13rem;
  }
`;

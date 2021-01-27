import styled from "styled-components";

export const MainSection = styled.div`
  min-height: 40vh;

  display: flex;
  justify-content: center;
`;

export const ItemArray = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 40rem;
  min-height: 2rem;

  h1 {
    font-weight: 400;
    font-size: 2.2rem;
  }

  #section-p {
    font-weight: 200;
    line-height: 2rem;
  }

  @media only screen and (max-width: 1350px) {
    width: 25rem;

    h1 {
      font-size: 1.7rem;
    }

    #section-p {
      line-height: 1.5rem;
    }
  }

  @media only screen and (max-width: 900px) {
    width: 15rem;
    height: 23rem;
  }

  @media only screen and (max-width: 600px) {
    width: 28rem;
    height: 12rem;

    h1 {
      font-size: 1.7rem;
    }
  }

  @media only screen and (max-width: 520px) {
    width: 23rem;
    height: 14rem;
  }

  @media only screen and (max-width: 430px) {
    width: 19rem;
    height: 16rem;
  }

  @media only screen and (max-width: 380px) {
    width: 16rem;
    height: 18rem;

    text-align: center;
  }

  @media only screen and (max-width: 320px) {
    width: 14rem;
    height: 21rem;
  }
`;

export const Section2 = styled.div`
  width: 40rem;
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  text-align: center;

  .lang-div {
    padding: 0.5rem;
  }

  input {
    cursor: pointer;
    border-radius: 0.5rem;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-weight: 500;
    :hover {
      background-color: #dcdcdc;
    }
  }

  @media only screen and (max-width: 1350px) {
    width: 25rem;
  }

  @media only screen and (max-width: 900px) {
    width: 15rem;
    margin-top: 1rem;

    .lang-div {
      padding: 0.3rem;
    }

    input {
      padding: 0.3rem;
      font-weight: 300;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 28rem;
    margin-top: 1.5rem;
    height: 8rem;

    input {
      font-size: 0.9rem;
    }
    .lang-div {
      padding: 0.2rem;
    }
  }

  @media only screen and (max-width: 520px) {
    width: 23rem;
    height: 10rem;
    margin-top: 2.1rem;
  }

  @media only screen and (max-width: 430px) {
    width: 19rem;
  }

  @media only screen and (max-width: 380px) {
    width: 16rem;
    margin-top: 2.5rem;
  }

  @media only screen and (max-width: 320px) {
    width: 13rem;
    margin-top: 3rem;
  }
`;

export const LangSection = styled.div`
  display: flex;
  width: 25rem;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  justify-content: center;
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
  text-align: left;

  h1 {
    font-weight: 700;
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 1350px) {
    h1 {
      font-size: 1.7rem;
    }
  }
`;

export const Section2 = styled.div`
  a {
    text-decoration: none;
    color: black;
    text-decoration: underline;
  }
  width: 80rem;
  min-height: 20rem;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  #img-div {
    display: flex;
    flex-direction: row;
  }

  .img-spacer {
    padding: 0.7rem;
  }

  .projects-div {
    padding: 2rem;
    h1 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #393939;
    }

    p {
      font-weight: 350;
      font-size: 0.9rem;
    }

    button {
      height: 2.3rem;
      width: 10rem;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
      font-weight: 600;

      :hover {
        background-color: #dcdcdc;
        font-weight: 650;

        #btn-logo {
          padding-left: 0.1rem;
        }
      }
    }
  }

  img {
    height: 28rem;
    width: 38rem;
    border: none;
    box-shadow: 0 0 10px #bbb;
    border-radius: 0.1rem;
  }

  #testaccnt-div {
    font-weight: 400;
  }

  .credentials-title {
    font-weight: 500;
  }

  #techstack-div {
    font-weight: 450;
  }

  #github-div {
    cursor: pointer;

    text-decoration: underline;

    button {
      :hover {
        opacity: 0.6;
      }
      border: none;
      outline: none;
      height: 1rem;
      text-decoration: underline;
      background-color: transparent;
    }
  }

  @media only screen and (max-width: 1350px) {
    width: 50rem;

    img {
      height: 12.5rem;
      width: 23rem;
      border: none;
      box-shadow: 0 0 10px #bbb;
      border-radius: 0.1rem;
    }

    .projects-div {
      padding: .5rem;
      h1 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #393939;
      }

      button {
        height: 1.8rem;
        width: 9rem;
      
        font-size: 0.8rem;
    
  }
`;

export const ProjectSection1 = styled.div``;

export const ProjectSection2 = styled.div``;

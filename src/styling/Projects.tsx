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
  width: 70rem;

  h1 {
    font-weight: 600;
    font-size: 2rem;
  }
`;

export const Section2 = styled.div`
  width: 70rem;
  min-height: 20rem;
  display: flex;
  justify-content: center;
  text-align: center;

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
          padding-left: 0.3rem;
        }
      }
    }
  }

  img {
    height: 20rem;
    width: 30rem;
    border: 1px solid #dfdfdf;
    border-radius: 0.6rem;
  }
`;

export const ProjectSection1 = styled.div``;

export const ProjectSection2 = styled.div``;

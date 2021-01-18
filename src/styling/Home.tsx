import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  background-color: white;
  // background-color: #f6f6f6;

  #icons-section {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  #github-logo {
    cursor: pointer;
    color: #4382ff;

    :hover {
      color: black;
    }
  }
`;

export const ItemArray = styled.div`
  //   height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 2.6rem;
    font-weight: 700;
    text-align: right;
  }

  .title-span {
    font-weight: 100;
  }

  #btn-div {
    align-items: center;

    button {
      background-color: #4382ff;
      color: white;
      border: none;
      outline: none;
      height: 3rem;
      font-size: 1.1rem;
      font-weight: 600;
      width: 14rem;
      border-radius: 2rem;
      cursor: pointer;

      :hover {
        background-color: #2361db;
      }
    }
  }
`;

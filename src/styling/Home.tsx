import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
  margin-top: -2rem;
`;

export const ItemArray = styled.div`
  //   height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 2.6rem;
    font-weight: 600;
    text-align: right;
  }

  .title-span {
    font-weight: 100;
  }

  #btn-div {
    align-items: center;

    button {
      background-color: black;
      color: white;
      border: none;
      outline: none;
      height: 2.5rem;
      font-size: 0.9rem;
      font-weight: 600;
      width: 11rem;
      border-radius: 2rem;
      cursor: pointer;

      :hover {
        opacity: 0.7;
      }
    }
  }
`;

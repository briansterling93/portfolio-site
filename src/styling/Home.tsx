import styled from "styled-components";

export const MainSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 90vh;
  margin-top: -2rem;
`;

export const ItemArray = styled.div`
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
    display: flex;
    flex-direction: column;
    // color: #e5e5e5;
    // color: #cbcbcb;
    animation: fadeIn 4s infinite;

    #arrow-1 {
      color: #848484;
    }

    #arrow-2 {
      color: #989898;
    }

    #arrow-3 {
      color: #c7c7c7;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0.1;
      }

      25% {
        opacity: 0.3;
      }

      50% {
        opacity: 0.6;
      }

      75% {
        opacity: 0.8;
      }

      100% {
        opacity: 1;
      }
    }

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
  @media only screen and (max-width: 1350px) {
    p {
      font-size: 2rem;
      font-weight: 600;
    }
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 320px) {
    p {
      font-size: 1.2rem;
    }
  }
`;

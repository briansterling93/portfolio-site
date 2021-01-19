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
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 35rem;
  min-height: 2rem;

  h1 {
    font-weight: 600;
    font-size: 2.2rem;
  }

  #section-p {
    font-weight: 200;
  }
`;

export const Section2 = styled.div`
  width: 35rem;
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  text-align: center;

  .lang-div {
    padding: 0.5rem;
  }

  input {
    // pointer-events: none;
    cursor: none;
    border-radius: 0.5rem;
    outline: none;
    border: none;
    padding: 0.5rem;
    font-weight: 500;
    :hover {
      background-color: #dcdcdc;
    }
  }
`;

export const LangSection = styled.div`
  display: flex;
  width: 25rem;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

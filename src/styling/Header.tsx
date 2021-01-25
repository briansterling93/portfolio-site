import styled from "styled-components";

export const IconsLogo = styled.div`
  min-height: 2rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  .logo-img {
    height: 2rem;
    width: 3rem;
  }

  #linkedin-logo {
    color: #0072b1;

    :hover {
      color: #005180;
    }
  }

  #github-logo {
    color: black;

    :hover {
      color: #404040;
    }
  }
`;

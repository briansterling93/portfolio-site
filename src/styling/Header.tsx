import styled from "styled-components";

export const IconsLogo = styled.div`
  min-height: 2rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  a {
    color: #838383;

    // :hover {
    //   color: #4382ff;
    // }
  }

  .logo-img {
    height: 2rem;
    width: 3rem;
  }

  #linkedin-logo {
    :hover {
      color: #0072b1;
    }
  }

  #github-logo {
    :hover {
      color: black;
    }
  }
`;

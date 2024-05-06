import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Poppins, sans-serif;
}

*, ::after, ::before {
    box-sizing: border-box;
  }
`;

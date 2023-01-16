import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  body {
    max-width: 900px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  main {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  a {
    color: lightcoral;
    text-decoration: none;
  }
  `;

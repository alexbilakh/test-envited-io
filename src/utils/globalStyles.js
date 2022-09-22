// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle(
  ({ theme: { colors, breakPoints } }) => `
    body {
      margin: 0;
      padding: 0;
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    * {
      box-sizing: border-box;
    }

    .btn {
      padding: 16px 18px;
      background: linear-gradient(90deg, ${colors.mediumPurple} 3.25%, ${colors.heliotrope} 100%);
      border-radius: 10px;
      border: 0px;
      outline: none;
  
      font-family: "Helvetica";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      color: ${colors.white};
      cursor: pointer;
      text-decoration: none;
  
      @media (min-width: ${breakPoints.tabletM}) {
        padding: 16px 70px;
        font-size: 20px;
        line-height: 23px;
      }
    }
  `
);

export default GlobalStyle;

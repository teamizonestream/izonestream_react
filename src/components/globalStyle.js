import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  html, body, #miyawaki_sakura {
    width: 100%;
    height: 100%;
  }
`;

export default globalStyles;

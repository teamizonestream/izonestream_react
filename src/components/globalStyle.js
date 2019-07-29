import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
  ${reset};
  html, body, #miyawaki_sakura {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR';
  }
`;

export default globalStyles;

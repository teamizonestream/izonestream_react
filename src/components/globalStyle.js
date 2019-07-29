import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,500,700&display=swap&subset=korean');
  @import url('https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css');
  ${reset};
  html, body, #miyawaki_sakura {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR';
  }
`;

export default globalStyles;

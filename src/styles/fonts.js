import { css } from "styled-components";

import RobotoLightWOFF2 from "../../static/fonts/roboto/Roboto-Light.woff2";
import RobotoLightWOFF from "../../static/fonts/roboto/Roboto-Light.woff";
import RobotoRegularWOFF2 from "../../static/fonts/roboto/Roboto-Regular.woff2";
import RobotoRegularWOFF from "../../static/fonts/roboto/Roboto-Regular.woff";
import RobotoItalicWOFF2 from "../../static/fonts/roboto/Roboto-Italic.woff2";
import RobotoItalicWOFF from "../../static/fonts/roboto/Roboto-Italic.woff";
import RobotoBoldWOFF2 from "../../static/fonts/roboto/Roboto-Bold.woff2";
import RobotoBoldWOFF from "../../static/fonts/roboto/Roboto-Bold.woff";

import OxaniumRegularWOFF2 from "../../static/fonts/oxanium/Oxanium-Regular.woff2";
import OxaniumRegularWOFF from "../../static/fonts/oxanium/Oxanium-Regular.woff";
import OxaniumBoldWOFF2 from "../../static/fonts/oxanium/Oxanium-Bold.woff2";
import OxaniumBoldWOFF from "../../static/fonts/oxanium/Oxanium-Bold.woff";

const FontFaces = css`
  /* ROBOTO */
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoLightWOFF2}) format("woff2"),
      url(${RobotoLightWOFF}) format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegularWOFF2}) format("woff2"),
      url(${RobotoRegularWOFF}) format("woff");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBoldWOFF2}) format("woff2"),
      url(${RobotoBoldWOFF}) format("woff");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoItalicWOFF2}) format("woff2"),
      url(${RobotoItalicWOFF}) format("woff");
    font-weight: 300;
    font-style: italic;
  }

  /* OXANIUM */

  @font-face {
    font-family: "Oxanium";
    src: url(${OxaniumRegularWOFF2}) format("woff2"),
      url(${OxaniumRegularWOFF}) format("woff");
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: "Oxanium";
    src: url(${OxaniumBoldWOFF2}) format("woff2"),
      url(${OxaniumBoldWOFF}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export default FontFaces;

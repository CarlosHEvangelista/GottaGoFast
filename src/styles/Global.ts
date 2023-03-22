import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
     }

     html {
        font-size: 10px;
     }

     body {
        background-color: #0F183C;
        color: #DEDEDE;
     }

     body, input, textarea, button {
        font: 400 1.6rem "Oswald", sans-serif;
     }
`;

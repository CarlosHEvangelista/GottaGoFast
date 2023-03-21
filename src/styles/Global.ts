import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
    }
    
    
    body {
        background-color: #0F183C;
        color: #DEDEDE;
    }

    body, input, button, textarea {
        font: 400 1.6rem 'Roboto Condensed',
        sans-serif
    }
`;

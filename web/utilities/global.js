import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";
import { primary } from "./colors";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        font-size: 62.5%;

        @media (max-width: 1200px) { 
            font-size: 56.25%;
        }

        @media (max-width: 900px) {
            font-size: 50%;
        }

        @media (min-width: 1800px) {
            font-size: 75%;
        }
    }

    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: ${primaryFont};
        height: 100%;
        background-color: ${primary[100]};
        padding: 10rem 10rem 0 10rem;

        @media (max-width: 600px) {
            padding: 3rem;
         }
    }
`;

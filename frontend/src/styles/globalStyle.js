import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-colour: #222260;
        --primary-colour2: 'colour: rgba(34, 34, 96, 0.6)';
        --primary-colour3: 'colour: rgba(34, 34, 96, 0.4)';
        --colour-green: #42AD00;
        --colour-grey: #aaa;
        --colour-accent: #F56692;
        --colour-delete: #FF0000;
    }

    body{
        font-family: "Lexend Deca", sans-serif;
        background-color: var(--primary-colour);
        font-optical-sizing: auto;
        font-weight: <weight>;
        font-style: normal;
    }
`;

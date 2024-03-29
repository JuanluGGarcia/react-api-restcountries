import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    font-family: "Nunito Sans", sans-serif;
    background-color: #202C36;
    color: #fff;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;

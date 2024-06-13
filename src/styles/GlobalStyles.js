import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    
  }
  
  body{
    box-sizing: border-box;
    margin: 0;
    color: #FFFFFF;
    background-image: url('/public/planets-data/assets/background-stars.svg');
    background-color: #070724;
    font-family: "Antonio", sans-serif;
    font-weight: 100;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
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

  .no-scroll {
    overflow: hidden;
}



  
`;

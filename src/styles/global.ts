import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
    --red: #e52e4d;
    --blue: #fdc500;
    --blue-light: #ffd500;
    --dark: #001233;
    --text-title:#363f5f;
    --text-body:#969cb3;
    --background:#f0f2f5;
    --shape:#FFFF;
    --green:#4bb543;


    }

    *{
      margin: 0;
      padding: 0;
      box-sizing: 0;
  }
  
  html {

      @media (max-width:1080px) {
          font-size: 93.75%;
      }
      @media (max-width:720px) {
          font-size:87.5%;
      }

  }
  body {
      background-color:var(--background);
      -webkit-font-smoothing: antialiased;
  }
  body, input , textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight:400,
  }
  h1,h2,h3,h4,h5, strong {
      font-weight: 600;
  }
  button {
      cursor: pointer;
  }
  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }

`;

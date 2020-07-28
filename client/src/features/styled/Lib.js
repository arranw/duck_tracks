import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --attention-color: #d6ffff;
    --attention-highlight: #78ffff;

    --nav-color: #071a52;
    --light-color: #ecfffb;

    --navbar-height: 60px;
  }

  @media only screen and (max-width: 800px) {
    :root {
      --navbar-height: 80px;
    }
  }
  

  html, body, #root {
    background: var(--light-color);
    font-family: 'Lato', sans-serif;
    height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
  }

  a, a:visited {
    color: unset;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  min-width: 300px;
  max-width: 800px;
  margin: auto;
  padding: 0 1rem;
  height: calc(100% - var(--navbar-height));

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;

  div > * {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 800px) {
    font-size: 120%;
  }
`;

export const BlockQuote = styled.blockquote`
  background: var(--attention-color);
  border-left: 10px solid var(--attention-highlight);
  font-size: 200%;

  margin: 0.5em 0.5em;
  padding: 0.5em 10px 0.5em 3em;

  :before {
    content: open-quote;
    color: var(--attention-highlight);
    font-size: 3em;

    position: absolute;
    top: 0rem;
    left: 0.5rem;
  }

  @media only screen and (max-width: 800px) {
    font-size: 150%;
  }
`;

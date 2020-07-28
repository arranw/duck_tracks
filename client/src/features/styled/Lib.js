import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --attention-color: #78ffff;
    --attention-highlight: #d6ffff;
    --primary-color: #6fc9c9;
    --danger-color: #ff304f;

    --input-border-color: #52abab;

    --nav-color: #071a52;
    --light-color: #ecfffb;

    --dark-color: #111;

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
    color: var(--dark-color);
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

  p,
  h1 {
    margin: 2rem 0;
  }

  @media only screen and (min-width: 800px) {
    font-size: 120%;
  }
`;

export const BlockQuote = styled.blockquote`
  background: var(--attention-highlight);
  border-left: 10px solid var(--attention-color);
  font-size: 200%;

  margin: 0.5em 0.5em;
  padding: 0.5em 10px 0.5em 3em;

  :before {
    content: open-quote;
    color: var(--attention-color);
    font-size: 3em;

    position: absolute;
    top: 0rem;
    left: 0.5rem;
  }

  @media only screen and (max-width: 800px) {
    font-size: 150%;
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Sora", sans-serif;
    font-size: 62.5%;
  };

  body {
    background-color: var(--bg);
    color: var(--font);
  };

  button {
    cursor: pointer;
  };

  :root {
    --bg: #f6f5fc;
    --font: #303030;

    --primary-dark: #7818f1;
    --primary: #9102d4;
    --secondary: #edebeb;
    --tertiary: #bfbfbf;

    --danger: #FC5050;
    --danger-light: #f97171;

    --success: #51ca73;

    --edit:#5061FC;
  };

  strong {
    font-weight: bold;
    font-size: 2.4rem;
  };

  h1 {
    font-size: 2.8rem;
  };

  h2 {
    font-size: 2.2rem;
  };

  p, u {
    font-size: 1.6rem;
  };

  span {
    font-size: 1rem;
  };

  .lnk {
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--primary);
  };

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  };
`;

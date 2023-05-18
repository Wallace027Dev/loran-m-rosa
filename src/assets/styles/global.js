import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Sora", sans-serif;
	font-size: 62.5%;
}

body {
  background-color: var(--light-font);
  color: var(--dark-font);
}

button {
  cursor: pointer;
}

:root {
  --primary: #9102d4;
  --secondary: #edebeb;
  --tertiary: #bfbfbf;
  --light-font: #fff;
  --dark-font: #303030;
}



strong {
  font-weight: bold;
}

h1 {
  font-size: 2.8rem;
}

h2 {
  font-size: 2.2rem;
}

p, u {
  font-size: 1.6rem;
}

span {
	font-size: 1rem;
}

.lnk {
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--primary);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
		cursor: pointer;
    background: var(--primary);
    border-radius: 1.25rem;
    border: none;
    height: 4rem;
    margin-bottom: 1.5rem;
    max-width: 50rem;
    width: 100%;
		font-weight: bold;
		font-size: 1.2rem;
		color: var(--light-font);
		
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

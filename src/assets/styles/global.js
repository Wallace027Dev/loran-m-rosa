import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}

body {
  font-size: 62.5%;
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
  font-weight: 800;
}

h1 {
  font-size: 2.8rem;
}

h2 {
  font-size: 2.2rem;
}

h3 {
  font-size: 1.6rem;
}

h4 {
  font-size: 1rem;
}

p {
  font-size: 0.4rem;
}

.lnk {
  font-size: 1.4rem;
  font-weight: 900;
  text-decoration: none;
  color: var(--primary);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
`

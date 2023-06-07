import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  justify-content: space-between;
  width: 90%;

  h1 {
    text-align: center;
    color: var(--bg);
    background: var(--primary);
    max-width: 35rem;
    width: 95%;
    padding: 0.8rem;
    border-radius: 1.6rem;
    font-size: 1.6rem;
    margin-right: 0.8rem;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 6rem;
    height: 3.4rem;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--tertiary);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 2.6rem;
    width: 2.6rem;
    left: 0.4rem;
    bottom: 0.4rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--primary);
  }

  input:focus + .slider {
    box-shadow: 0 0 0.1rem var(--primary);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(2.6rem);
    -ms-transform: translateX(2.6rem);
    transform: translateX(2.6rem);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  & + & {
    margin-top: 0.8rem;
  }
`;

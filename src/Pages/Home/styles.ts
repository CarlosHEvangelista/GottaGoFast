import styled from "styled-components";

export const AuthenticationPage = styled.div`
  align-items: stretch;
  display: flex;
  height: 100vh;

  aside {
    background-color: #4166f5;
    color: #fff;
    display: flex;
    flex: 6.74;
    flex-direction: column;
    justify-content: center;
    padding: 12rem 8rem;

    img {
      margin-bottom: 1.6rem;
      max-width: 32rem;
    }

    h1 {
      font: 700 3.6rem "Oswald", sans-serif;
    }

    p {
      font-size: 2.4rem;
      line-height: 3.2rem;
      margin-top: 1.6rem;
    }
  }

  main {
    align-items: center;
    display: flex;
    flex: 7.68;
    justify-content: center;
    padding: 0 3.2rem;
  }
`;

export const MainContent = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  max-width: 32rem;
  width: 100%;

  > img {
    align-self: center;
  }

  input {
    border: 1px solid #5db7de;
    border-radius: 8px;
    height: 5rem;
    padding: 0 1.6rem;
    width: 100%;
  }
`;

export const Divider = styled.div`
  align-items: center;
  color: #a8a8b3;
  display: flex;
  font-size: 1.4rem;
  gap: 1.6rem;
  margin: 3.2rem 0;

  &::after {
    background-color: #a8a8b3;
    content: "";
    flex: 1;
    height: 1px;
  }

  &::before {
    background-color: #a8a8b3;
    content: "";
    flex: 1;
    height: 1px;
  }
`;

export const Button = styled.button.attrs((props) => {})`
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border: 0;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  gap: 8px;
  height: 5rem;
  justify-content: center;
  margin-top: ${(props) => `${props.marginTop}rem`};
  padding: 0 3.2rem;
  transition: filter 0.2s;
  width: 100%;

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

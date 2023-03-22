import styled from "styled-components";

export const AuthenticationPage = styled.div`
  align-items: stretch;
  display: flex;
  height: 100vh;

  aside {
    background-color: #4166f5;
    color: #fff;
    display: flex;
    flex: 6.76;
    flex-direction: column;
    font-family: "Roboto Condensed", sans-serif;
    justify-content: center;
    padding: 12rem 8rem;

    img {
      max-width: 31.3rem;
    }

    strong {
      font-size: 3.6rem;
      font-weight: 700;
      margin-bottom: 1.6rem;
    }

    p {
      color: #dedede;
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 3.2rem;
    }
  }

  main {
    align-items: center;
    display: flex;
    flex: 7.74;
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

  form {
    input {
      background: #fff;
      border: 0;
      border-radius: 8px;
      font-weight: 500;
      height: 5rem;
      width: 100%;
      padding: 0 1.6rem;
    }
  }
`;

export const Divider = styled.div`
  align-items: center;
  color: #a8a8b3;
  display: flex;
  gap: 8px;
  justify-content: center;
  margin: 3.2rem 0;

  &::before {
    background: #a8a8b3;
    content: "";
    flex: 1;
    height: 1px;
  }

  &::after {
    background: #a8a8b3;
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

import React from "react";

import { AuthenticationPage, Button, Divider, MainContent } from "./styles";

import EnterInARoomImage from "../../assets/img/EnterInARoom.svg";

import GoogleIconImage from "../../assets/img/GoogleIcon.svg";

import IllustrationImage from "../../assets/img/illustration.svg";

import LogoImage from "../../assets/img/logo.svg";

import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function Navigation() {
    navigate("/room/new");
  }
  return (
    <AuthenticationPage>
      <aside>
        <img src={IllustrationImage} alt="Q&A illustration" />
        <strong>
          Faça sua melhor <i>run</i>
        </strong>
        <p>Veja tecnicas de Speedrunning de qualquer fase de qualquer jogo</p>
      </aside>
      <main>
        <MainContent>
          <img src={LogoImage} alt="Letmeask Logo" />
          <Button
            backgroundColor={"#ea4335"}
            marginTop={5}
            onClick={Navigation}
          >
            <img src={GoogleIconImage} alt="Google Logo" />
            Crie uma sala com google
          </Button>
          <Divider>Ou entre em uma sala</Divider>
          <form action="">
            <input type="text" placeholder="Digite o codígo da sala" />
            <Button type="submit" backgroundColor={"#5db7de"} marginTop={1}>
              <img src={EnterInARoomImage} alt="" />
              Entrar na sala
            </Button>
          </form>
        </MainContent>
      </main>
    </AuthenticationPage>
  );
}

import React from "react";

import { RoomCreationPage, Button, MainContent } from "./styles";

import EnterInARoomImage from "../../assets/img/EnterInARoom.svg";

import IllustrationImage from "../../assets/img/illustration.svg";

import LogoImage from "../../assets/img/logo.svg";

export function NewRoom() {
  return (
    <RoomCreationPage>
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
          <h2>Crie uma sala</h2>
          <form action="">
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit" backgroundColor={"#5db7de"} marginTop={1}>
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <a href="/">Clique aqui</a>
          </p>
        </MainContent>
      </main>
    </RoomCreationPage>
  );
}

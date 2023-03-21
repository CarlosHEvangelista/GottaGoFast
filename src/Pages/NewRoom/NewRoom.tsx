import React from "react";

import { AuthenticationPage, Button, MainContent } from "./styles";

import EnterInARoomImage from "../../assets/img/enterinaroom.svg";

import IllustrationImage from "../../assets/img/illustration.svg";

import LogoImage from "../../assets/img/logo.svg";

function NewRoom() {
  return (
    <AuthenticationPage>
      <aside>
        <img src={IllustrationImage} alt="Q&A Illustration" />
        <h1>
          Faça a sua melhor <i>run</i>
        </h1>
        <p>Veja tecnicas de speerunning de qualquer fase, de qualquer jogo</p>
      </aside>
      <main>
        <MainContent>
          <img src={LogoImage} alt="Letmeask Logo" />
          <h2>Crie sua sala</h2>
          <form action="">
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit" backgroundColor={"#5db7de"} marginTop={1}>
              <img src={EnterInARoomImage} alt="" />
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <a href="#">Clique aqui</a>
          </p>
        </MainContent>
      </main>
    </AuthenticationPage>
  );
}

export default NewRoom;

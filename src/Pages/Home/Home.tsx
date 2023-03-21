import React from "react";

import { AuthenticationPage, Button, Divider, MainContent } from "./styles";

import EnterInARoomImage from "../../assets/img/enterinaroom.svg";

import GoogleIconImage from "../../assets/img/googleIcon.svg";

import IllustrationImage from "../../assets/img/illustration.svg";

import LogoImage from "../../assets/img/logo.svg";

function Home() {
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
          <Button backgroundColor={"#ea4335"} marginTop={5}>
            {" "}
            <img src={GoogleIconImage} alt="Google logo" /> Crie sua sala com
            Game center
          </Button>
          <Divider>ou entre em uma sala</Divider>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
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

export default Home;

import React from "react";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";
import { FiThumbsUp } from "react-icons/fi";

const Card = () => {
  return(
  <CardContainer>
    <ImageBackground src="https://i.pinimg.com/736x/62/61/7e/62617e7992e8e7f91467c92a24fb6628.jpg"/>
    <Content>
      <UserInfo>
        <UserPicture src="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png"/>
        <div>
          <h4>Monkey D. Luffy</h4>
          <p>há 8 minutos</p>
        </div>
      </UserInfo>
      <PostInfo>
        <h4>Projeto para curso de HTML e CSS</h4>
        <p>Projeto feito o curso de html e css no bootcamp... <strong>Saiba Mais</strong></p>
      </PostInfo>
      <HasInfo>
        <h4>#HTML #CSS #Javascript</h4>
        <p>
          <FiThumbsUp/> 10
        </p>
      </HasInfo>
    </Content>
  </CardContainer>
)};

export {Card}

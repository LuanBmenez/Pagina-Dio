import { Link } from "react-router-dom";

import imagebanner from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighLight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Card />
        </Column>
        <Column flex={1}>
        <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
          <UserInfo
            percentual={90}
            nome="Luan Menezes"
            image="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png"
          />
          <UserInfo
            percentual={66}
            nome="Luan Menezes"
            image="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png"
          />
          <UserInfo
            percentual={32}
            nome="Luan Menezes"
            image="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png"
          />
          <UserInfo
            percentual={17}
            nome="Luan Menezes"
            image="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png"
          />
          <UserInfo
            percentual={8}
            nome="Luan Menezes"
            image="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };




import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, TitleHighLight } from "./styles";

const Feed = () => {

  return (
    <>
      <Header/>
      <Container>
        <Column flex={3}>
        <title>Feed</title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
        <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
          <UserInfo
            percentual={90}
            nome="Monkey D. Luffy"
            image="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png"
          />
          <UserInfo
            percentual={66}
            nome="Trafalgar D. Law"
            image="https://i.pinimg.com/736x/f4/8d/ca/f48dca93b826bdc17cbf50e13fe3083a.jpg"
          />
          <UserInfo
            percentual={32}
            nome="Roronoa Zoro"
            image="https://upload.wikimedia.org/wikipedia/pt/6/6e/Zor%C3%A3o.png"
          />
          <UserInfo
            percentual={17}
            nome="Barba Branca"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxDk69geBmUL2kihAN8Ns3dOF7MJC98n1uQ&s"
          />
          <UserInfo
            percentual={8}
            nome="Gol D. Roger"
            image="https://pm1.aminoapps.com/6345/07f283401de0d86bbe67402e567f2945d3e70ca0_hq.jpg"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };

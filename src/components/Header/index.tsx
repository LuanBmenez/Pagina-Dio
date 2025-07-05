import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";

import {
  BuscarInputContainer,
  Container,
  Row,
  Input,
  Menu,
  MenuRight,
  Wrapper,
  UserPicture,
} from "./styles";
import { IHeader } from "./Types";

const Header = ({ autenticado }: IHeader) => {
   const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png" />
          ) : (
            <>
              <MenuRight onClick={() => navigate("/")}>Home</MenuRight>
              <Button title="Entrar" onClick={() => navigate("/login")} />
              <Button title="Feed" onClick={() => navigate("/feed")} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };

import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import { useAuth } from "../../hooks/useAuth";

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


const Header = () => {
  const { user, handleSingOut } = useAuth();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo da dio" />
          </Link>
          {user.id ? (
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
          {user.id ? (
            <>
              <UserPicture src="https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png" />
              <button onClick={handleSingOut}>Sair</button>
            </>
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

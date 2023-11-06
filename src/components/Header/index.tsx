import logoImg from "../../assets/logo2.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img className="logo" src={logoImg} alt="bankrupt logo" />
        <button type="button">New transaction</button>
      </Content>
    </Container>
  );
}

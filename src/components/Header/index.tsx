import { useState } from "react";
import logoImg from "../../assets/logo2.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Content>
        <img className="logo" src={logoImg} alt="bankrupt logo" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          New transaction
        </button>
      </Content>
    </Container>
  );
}

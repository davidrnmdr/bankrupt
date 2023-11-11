import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioButton } from "./style";
import closeImg from "../../assets/fechar.svg";
import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saidas.svg";
import { useState } from "react";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose(): void;
};

export function NewTransactionModal(props: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button
        type="button"
        onClick={props.onRequestClose}
        className="modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>
      <Container>
        <h2>Register transaction</h2>

        <input placeholder="Title" />
        <input type="number" placeholder="Value" />
        <input placeholder="Category" />
        <TransactionTypeContainer>
          <RadioButton
            type="button"
            onClick={() => setType("deposit")}
            isActive={type == "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="income" />
            <span>Income</span>
          </RadioButton>

          <RadioButton
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type == "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Outcome</span>
          </RadioButton>
        </TransactionTypeContainer>
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}

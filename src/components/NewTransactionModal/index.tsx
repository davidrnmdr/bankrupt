import Modal from "react-modal";
import { Container } from "./style";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose(): void;
};

export function NewTransactionModal(props: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <Container>
        <h2>Register transaction</h2>

        <input placeholder="Title" />
        <input type="number" placeholder="Value" />
        <input placeholder="Category" />
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}

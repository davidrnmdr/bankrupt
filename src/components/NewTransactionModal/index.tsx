import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioButton } from "./style";
import closeImg from "../../assets/fechar.svg";
import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saidas.svg";
import { useState, FormEvent, useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose(): void;
};

export function NewTransactionModal(props: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionContext);
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ title, value, category, type });

    setTitle("");
    setValue(0);
    setCategory("");
    setType("deposit");

    props.onRequestClose();
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register transaction</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <input
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
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

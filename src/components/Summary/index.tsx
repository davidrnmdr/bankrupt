import { TransactionContext } from "../../TransactionsContext";
import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saidas.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./style";
import { useContext } from "react";

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>$1000.00</strong>
      </div>

      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Outcomes" />
        </header>
        <strong>- $500.00</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>$500.00</strong>
      </div>
    </Container>
  );
}

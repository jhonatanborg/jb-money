import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totaImg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext";

export function Summary() {
  const { transactions } = useContext(TransactionContext);
  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Entradas</p>
          <img src={totaImg} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}

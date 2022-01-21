import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { TransactionProvider, } from "./contexts/TransactionContext";

export function App() {
  const [isNewTransaction, setIsNewTransaction] = useState(false);

  function handleOpenNewTransaction() {
    setIsNewTransaction(true);
  }
  function handleCloseNewTransaction() {
    setIsNewTransaction(false);
  }
  return (
    <TransactionProvider>
      <Header onOpenNewTransaction={handleOpenNewTransaction} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransaction} onRequestClose={handleCloseNewTransaction} />
    </TransactionProvider>
  );
}

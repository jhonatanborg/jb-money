import Modal from "react-modal"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import { useState, FormEvent, useContext } from 'react';
import { TransactionContext } from "../../contexts/TransactionContext";

Modal.setAppElement('#root');
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionContext);
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const handleCreateNewTransaction = (event: FormEvent) => {
        event.preventDefault();
        createTransaction({ title, value, type, category });

    }
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button className="react-modal-close"
                type="button"
                onClick={onRequestClose}>
                <img src={closeImg} alt="Botão fechar modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    value={title}
                    type="text"
                    placeholder="Titulo"
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    value={value}
                    type="number"
                    placeholder="Valor"
                    onChange={event => setValue(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox activeColor="green" isActive={type === 'deposit'} type="button" onClick={() => setType('deposit')}>
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox activeColor="red" onClick={() => setType('withdraw')} isActive={type === 'withdraw'} type="button">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Sáida</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    value={category}
                    type="text"
                    placeholder="Categoria"
                    onChange={e => setCategory(e.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}

import React, { useState } from 'react';
import { Container, Component, Table, CreditCard } from './styles'
import { Link } from "react-router-dom";
import data from '../../data/CreditoolsInfo'

const CreditoolsBox = () => {

    const [expandedContainer, setExpandedContainer] = useState(false);

    const changeButton = () => {
        if (expandedContainer === true) {
            setExpandedContainer(false);
        }
        else {
            setExpandedContainer(true);
        }
    }

    return (
        <Container>
            <Component>
                <h2>Saldo atual: XXXX Creditools</h2>
                <h1>Histórico de compras</h1>

                <Table>
                    <tbody>
                        <tr>
                            <td>Quantidade adquirida</td>
                            <td>Valor gasto</td>
                            <td>Data</td>
                        </tr>
                        {data.PurchaseInfo.map(purchase => {
                            return (
                                <tr>
                                    <td>{purchase.quantity} Creditools</td>
                                    <td>R${purchase.value},00</td>
                                    <td>{purchase.date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

                <CreditCard>
                    <h1>Comprar créditos</h1>
                    <div>
                        <input type="text" id="name" name="name" placeholder="Nome Completo" />
                        <input type="text" id="cpf" name="cpf" placeholder="CPF" />
                    </div>
                    <div>
                        <input type="text" id="number" name="number" placeholder="Número do cartão" />
                        <input type="text" id="date" name="date" placeholder="Validade" />
                        <input type="text" id="cvv" name="cvv" placeholder="CVV" />
                    </div>
                    <div>
                        <input type="text" id="quantity" name="quantity" placeholder="Quantidade" />
                        <span>R$ XXX,00</span>
                    </div>
                </CreditCard>
                <Link to="/">
                    <button type="button" className="expandedContainerButton" onClick={() => changeButton()}>
                        Adicionar Creditools
                </button>
                </Link>
            </Component>

        </Container >
    );
}
export default CreditoolsBox;
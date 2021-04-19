import React, { useState } from 'react';
import { Container, Component, Table } from './styles'
import { useForm } from "react-hook-form";
import data from '../../data/CreditoolsInfo'

const CreditoolsBox = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Container>
            <Component>
                <h1>Histórico de vendas de Creditools</h1>

                <Table>
                    <tbody>
                        <tr>
                            <td>Usuário</td>
                            <td>Data</td>
                            <td>Quantidade adquirida</td>
                            <td>Valor gasto</td>
                        </tr>
                        {data.PurchaseInfo.map(purchase => {
                            return (
                                <tr>
                                    <td>{purchase.user}</td>
                                    <td>{purchase.date}</td>
                                    <td>{purchase.quantity} Creditools</td>
                                    <td>R${purchase.value},00</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <h2>Total arrecadado: R${data.TotalPurchase},00</h2>
            </Component>

        </Container >
    );
}
export default CreditoolsBox;
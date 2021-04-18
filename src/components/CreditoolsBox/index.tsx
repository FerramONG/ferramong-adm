import React, { useState } from 'react';
import { Container, Component, Table, CreditCard } from './styles'
import { useForm } from "react-hook-form";
import data from '../../data/CreditoolsInfo'

const CreditoolsBox = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
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

                <CreditCard onSubmit={handleSubmit(onSubmit)}>
                    <h1>Comprar créditos</h1>
                    <div>
                        <input type="text" id="name" placeholder="Nome Completo" {...register("name")} />
                        <input type="text" id="cpf" placeholder="CPF" {...register("cpf")} />
                    </div>
                    <div>
                        <input type="text" id="number" placeholder="Número do cartão" {...register("number")} />
                        <input type="text" id="date" placeholder="Validade" {...register("date")} />
                        <input type="text" id="cvv" placeholder="CVV" {...register("cvv")}/>
                    </div>
                    <div>
                        <input type="text" id="quantity" placeholder="Quantidade" {...register("quantity")}/>
                        <span>R$ XXX,00</span>
                    </div>
                
                    <button type="submit" className="expandedContainerButton" >
                        Adicionar Creditools
                    </button>
                </CreditCard>
            </Component>

        </Container >
    );
}
export default CreditoolsBox;
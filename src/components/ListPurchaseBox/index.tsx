import React,{useEffect} from 'react';
import { Container, Component, Table } from './styles'
import data from '../../data/CreditoolsInfo'
import { useHistory } from "react-router-dom";
import { useLogin } from '../../context/GlobalState'
import axios from 'axios'

const ListPurchaseBox = () => {

    const { userId, setUserId, token, setToken } = useLogin();
    const history = useHistory();
    useEffect(() => {
        axios.get('https://ferramong-auth.herokuapp.com/authenticator/validateToken/' + token)
        .then(response => {
            console.log('DADOS DE RESPOSTA DA CONFIRMACAO DE TOKEN:');
            console.log(response);
            alert('usuário logado')
        })
        .catch(error => {
            console.log('DADOS DE ERRO TOKEN:');
            console.log(error);
            alert('usuário não logado')
            //history.push('./');
        })
    }, []);

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
export default ListPurchaseBox;
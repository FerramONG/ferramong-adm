import React, { useEffect, useState } from 'react';
import { Box, Container, Component, Report, Table } from './styles'
import data from '../../data/CreditoolsInfo'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useLogin } from '../../context/GlobalState'
import axios from 'axios'

const ListPurchaseBox = () => {

    const { userId, setUserId, token, setToken } = useLogin();
    const [purchaseData, setPurchaseData] = useState([]);
    const [dwellerName, setDwellerName] = useState('');
    const [searchedDwellerId, setSearchedDwellerId] = useState('');
    const [searchedDwellerPurchases, setSearchedDwellerPurchases] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    //let purchaseData = [];
    const history = useHistory();
    useEffect(() => {
        axios.get('https://ferramong-auth.herokuapp.com/authenticator/validateToken/' + token)
            .then(response => {
                console.log('DADOS DE RESPOSTA DA CONFIRMACAO DE TOKEN:');
                console.log(response);
                //alert('Usuário logado')
            })
            .catch(error => {
                console.log('DADOS DE ERRO TOKEN:');
                console.log(error);
                alert('Necessário estar logado')
                history.push('./');
            });

        axios.get('https://ferramong-pay.herokuapp.com/purchases/creditools/ong/2021-04-18T22%3A08%3A00.000Z/2021-05-26T22%3A08%3A00.000Z')
            .then(response => {
                console.log('DADOS DE RESPOSTA DE TODAS AS COMPRAS:');
                setPurchaseData(response.data)
                //purchaseData = response.data;
                // console.log('-------agora vai-------')
                // purchaseData.map(data => console.log(data['total']))
                //console.log(purchaseData[2]['total']);
                //alert(purchaseData[2]['total']);
                //alert(purchaseData)
            })
            .catch(error => {
                console.log('DADOS DE ERRO DE TODAS AS COMPRAS:');
                console.log(error);
            });

    }, []);

    const onSearch = (data) => {
        axios.get('https://ferramong-auth.herokuapp.com/accountManager/getDweller/name/' + data.dwellerName)
            .then(response => {
                console.log('DADOS DO NOME PESQUISADO:');
                console.log(response);
                setSearchedDwellerId(response['data']['id'])
                setDwellerName(data.dwellerName)
                //alert(searchedDwellerId)
            })
            .catch(error => {
                console.log('DADOS DE ERRO COMPRAS:');
                console.log(error);
                //alert('Usuário não logado')
            })

        axios.get('https://ferramong-pay.herokuapp.com/purchases/creditools/dweller/' + searchedDwellerId)
            .then(response => {
                console.log('------DADOS DE COMPRAS DO NOME PESQUISADO:-----');
                console.log(response.data);
                //alert(searchedDwellerId)
                setSearchedDwellerPurchases(response.data);
            })
            .catch(error => {
                console.log('DADOS DE ERRO COMPRAS:');
                console.log(error);
                //alert('Usuário não logado')
            })

    }

    return (
        <Box>
            <form className="contact-form" onSubmit={handleSubmit(onSearch)}>
                <input type="text" placeholder="Pesquisar usuário" {...register("dwellerName", { required: true })} />
                <input type="submit" value="Pesquisar" id="button" />
            </form>

            <Container>

                <Component>
                    <h1>Histórico de vendas de Creditools</h1>

                    <Table>
                        <tbody>
                            <tr>
                                <td>Usuário</td>
                                <td>Data</td>
                                <td>Quantidade adquirida</td>
                            </tr>
                            {
                                purchaseData.map(purchase => {
                                    // axios.get('https://ferramong-auth.herokuapp.com/accountManager/getDweller/id/' + purchase['id_dweller'])
                                    //     .then(response => {
                                    //         setDwellerName(response.data.name);
                                    //     })
                                    //     .catch(error => {
                                    //         console.log('DADOS DE ERRO DwellerName:');
                                    //         console.log(error);
                                    //     })
                                    const date = new Date(purchase['date'])
                                    const month = '' + (date.getMonth() + 1)
                                    const day = '' + date.getDate()
                                    const year = date.getFullYear();

                                    return (
                                        <tr>
                                            <td>{purchase['id_dweller']}</td>
                                            <td>{day + ' / ' + month + ' / ' + year}</td>
                                            <td>{purchase['total']} Creditools</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>

                    <h2>Total arrecadado:{ } R$,00</h2>
                </Component>
                <Component>
                    <h1>Compras do usuário {dwellerName}</h1>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Data</td>
                                <td>Quantidade adquirida</td>
                            </tr>
                            {
                                searchedDwellerPurchases.map(purchase => {
                                    // axios.get('https://ferramong-auth.herokuapp.com/accountManager/getDweller/id/' + purchase['id_dweller'])
                                    //     .then(response => {
                                    //         setDwellerName(response.data.name);
                                    //     })
                                    //     .catch(error => {
                                    //         console.log('DADOS DE ERRO DwellerName:');
                                    //         console.log(error);
                                    //     })
                                    const date = new Date(purchase['date'])
                                    const month = '' + (date.getMonth() + 1)
                                    const day = '' + date.getDate()
                                    const year = date.getFullYear();

                                    return (
                                        <tr>
                                            <td>{day + ' / ' + month + ' / ' + year}</td>
                                            <td>{purchase['total']} Creditools</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Component>

            </Container >
        </Box>
    );
}
export default ListPurchaseBox;
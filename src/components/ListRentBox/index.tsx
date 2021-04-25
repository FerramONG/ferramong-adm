import React, { useEffect, useState } from 'react';
import { Container, Component, Table } from './styles'
import data from '../../data/RentInfo'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from '../../context/GlobalState';
import axios from 'axios'

const ListRentBox = () => {

    const { userId, setUserId, token, setToken } = useLogin();
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
            })
    }, []);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSearch = (data) => {
        axios.get('https://ferramong-tools-manager.herokuapp.com/rentals',{
            headers: {
                'dwellerId': data.dwellerId
            }
        })
            .then(response => {
                console.log('PROCUROU ID PELO NOME')
                console.log(response)
            })
            .catch(error => {
                console.log('DEU ERRO NA PROCURA PELO ID')
                console.log(error)
            })
    }

    const [search, setSearch] = useState('');

    const filteredTools = data.filter(tool => {
        return tool.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <Container>
            {/* <input type="text" placeholder="Pesquisar usuário" onChange={e => setSearch(e.target.value)} /> */}
            <form className="search-form" onSubmit={handleSubmit(onSearch)}>
                <input type="text" id="dwellerId" placeholder="ID do dono" {...register("dwellerId", { required: true })} />
                {errors.dwellerId && errors.dwellerId.type === "required" && <span>Necessário informar nome</span>}
                <input type="submit" value="Procurar" id="buttonSearch" />
            </form>
            <Component>
                <h1>Histórico de alugúeis e empréstimos</h1>
                <Table>
                    <tbody>
                        <tr>
                            <td>Usuário</td>
                            <td>Data</td>
                            <td>Ferramenta</td>
                            <td>Alugou/Emprestou</td>
                            <td>Valor gasto</td>
                        </tr>
                        {filteredTools.map(user => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.date}</td>
                                    <td>{user.tool}</td>
                                    <td>{user.action}</td>
                                    <td>{user.value} Creditools</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Component>

        </Container >
    );
}
export default ListRentBox;
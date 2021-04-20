import React, { useEffect, useState } from 'react';
import { Container, Component, Table } from './styles'
import data from '../../data/RentInfo'

const ListRentBox = () => {

    const [search, setSearch] = useState('');
    //const [filteredTools, setFilteredTools] = useState([]);

    // useEffect( ()=>{
    //     setFilteredTools(
    //         data.filter( tool => {
    //             return tool.name.toLowerCase().includes(search.toLowerCase())
    //         })
    //     )
    // },[search,filteredTools])

    const filteredTools = data.filter(tool => {
        return tool.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <Container>
            <input type="text" placeholder="Pesquisar usuário" onChange={e => setSearch(e.target.value)} />
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
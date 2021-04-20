import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu'
import ToolBox from '../../components/ToolBox';
import data from '../../data/ToolsInfo'
import { ToolsContainer } from './styles'

const ListTool = () => {

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
        <div>
            <Menu />  
            <ToolsContainer>
            <input type="text" placeholder="Pesquisar ferramenta" onChange={e => setSearch(e.target.value)} />
                {filteredTools.map(purchase => {
                    return (
                        <ToolBox name={purchase.name} category={purchase.category}
                    price={purchase.price} utility={purchase.utility} use={purchase.use}></ToolBox>
                    )
                })}
            </ToolsContainer>
        </div>
    );
}
export default ListTool;
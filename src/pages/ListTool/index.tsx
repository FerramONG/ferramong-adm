import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import ToolBox from '../../components/ToolBox';
import data from '../../data/ToolsInfo'
import { ToolsContainer } from './styles'
import { useLogin } from '../../context/GlobalState'
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios'


const Home = () => {

    const { userId, setUserId, token, setToken } = useLogin();

    console.log("Está logado no HOME: " + userId + ' Com o token: ' + token);
    let history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [searchedTool, setSearchedTool] = useState([]);

    const onSearch = (data) => {
        axios.get('https://ferramong-tools-manager.herokuapp.com/search/by-tool?toolName='+data.toolName+'&fetchAvailable=true&fetchRented=true')
        .then(response => {
            console.log('------FERRAMENTAS DISPONÍVEIS:-----');
            console.log(response.data);
            setSearchedTool(response.data.availableTools)
        })
        .catch(error => {
            console.log('DADOS DE ERRO FERRAMENTAS PESQUISADAS:');
            console.log(error);
        })
    }

    const [search, setSearch] = useState('');

    const filteredTools = data.filter(tool => {
        return tool.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <React.Fragment>
            <Menu />
            <ToolsContainer>
                <form className="search-form" onSubmit={handleSubmit(onSearch)}>
                    <div>
                        <input type="text" placeholder="Pesquisar ferramenta" {...register("toolName", { required: true })} />
                        <input type="submit" value="Buscar" id="button" />
                    </div>
                    {errors.toolName && errors.toolName.type === "required" && <span>Digite uma ferramenta</span>}
                </form>

                {searchedTool.map(tool => {
                    return(
                        <ToolBox name={tool['name']} category={tool['category']} ownerId={tool['ownerId']}
                        price={tool['price']} utility={tool['description']} use={tool['instructions']} 
                        toolId={tool['id']} availableUntil={tool['availableUntil']}/>
                    )
                })
                }
            </ToolsContainer>
        </React.Fragment>
    );
}
export default Home;
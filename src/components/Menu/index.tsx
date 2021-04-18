import React from 'react';
import { Container, NavBar, Item, SearchBar,Login } from './styles'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
//import VisitSchedulerModal from '../VisitScheduler';

export default function Menu() {
    return (
        <Container>
            <NavBar>
            <Link className="link" to="/"><Item>Adicionar ferramenta</Item></Link>
            <Link className="link" to="/search"><Item>Listar</Item></Link>
            <Link className="link" to="/creditools"><Item>Pesquisar ferramentas</Item></Link>
            {/* <VisitSchedulerModal userId = "123456789"></VisitSchedulerModal> */}
                <SearchBar>
                    <input type="text" placeholder="Cortador de grama..." />
                    <button type="submit"><SearchIcon/></button>
                </SearchBar>
                <Link className="link" to="login"><Login>Entrar</Login></Link>
            </NavBar>
        </Container>
    )
}
import React from 'react';
import { Container, NavBar, Item, SearchBar, Login } from './styles'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
//import VisitSchedulerModal from '../VisitScheduler';
import Logo from "../../data/ferramong_logo.png"

export default function Menu() {
    return (
        <Container>
            <NavBar>
                <Link to='/'><img src={Logo}></img></Link>
                <Link className="link" to="/addtool"><Item>Adicionar ferramenta</Item></Link>
                <Link className="link" to="/listtool"><Item>Listar ferramentas</Item></Link>
                <Link className="link" to="/listpurchase"><Item>Listar compras</Item></Link>
                {/* <Link className="link" to="/listrent"><Item>Listar empréstimos</Item></Link> */}
                <Link className="link" to="/"><Login>Entrar</Login></Link>
            </NavBar>
        </Container>
    )
}
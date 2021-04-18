import React from 'react';
import { Container, Component, CreateAccount } from './styles'
import { Link } from "react-router-dom";

export default function LoginBox() {
    return (
        <Container>
            <Component>
                <h1>Portal Ferramong</h1>
                <form className="contact-form" /*onSubmit={sendLogin} action="efetuar-login.php" method="post"*/ >
                        <input type="text" name="cpf" placeholder="CPF"/>
                        <input type="password" name="password" placeholder="Senha" />
                        <Link to="/"><input type="submit" value="Entrar" id="button"/></Link>
                </form>
            <CreateAccount>
                <h3>Não possui uma conta ainda? Cadastre-se <Link to="/">aqui</Link> </h3>
            </CreateAccount>
            </Component>
        </Container>
    )
}
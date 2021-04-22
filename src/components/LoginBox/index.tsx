import React from 'react';
import { Container, Component, CreateAccount } from './styles'
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'

export default function LoginBox() {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        console.log('DADOS ENVIADOS PRA API:');
        console.log(data);

        axios.post('https://ferramong-auth.herokuapp.com/authenticator/login',{
            cpf: data.cpf,
            password: data.password,
        })
        .then(response => {
            console.log('DADOS DE RESPOSTA:');
            console.log(response);
            history.push('./addtool')
        })
        .catch(error => {
            console.log('DADOS DE ERRO:');
            console.log(error);
        })
    }

    return (
        <Container>
            <Component>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="CPF" {...register("cpf", { required: true })}/>
                        {errors.cpf && errors.cpf.type === "required" && <span>Indique seu cpf</span>}
                        <input type="password" placeholder="Senha" {...register("password", { required: true })}/>
                        {errors.password && errors.password.type === "required" && <span>Indique sua senha</span>}
                        <input type="submit" value="Entrar" id="button"/>                 </form>
            <CreateAccount>
                <h3>Não possui uma conta ainda? Cadastre-se <Link to="/register">aqui</Link> </h3>
                <h3>Esqueceu sua senha? Clique <Link to="/forgotpassword">aqui</Link></h3>
            </CreateAccount>
            </Component>
        </Container>
    )
}
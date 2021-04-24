import React, { useEffect } from 'react';
import { Container, Component, CreateAccount } from './styles'
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useLogin } from '../../context/GlobalState'

export default function LoginBox() {

    const { userId, setUserId, token, setToken } = useLogin();
    const history = useHistory();
    useEffect(() => {
        axios.get('https://ferramong-auth.herokuapp.com/authenticator/validateToken/' + token)
            .then(response => {
                console.log('DADOS DE RESPOSTA DA CONFIRMACAO DE TOKEN:');
                console.log(response);
                //alert('Usuário já logado')
                history.push('./addtool');
            })
            .catch(error => {
                console.log('DADOS DE ERRO TOKEN:');
                console.log(error);
                //alert('Usuário não logado')
            })
    }, []);
    console.log("Está logado no LOGIN: " + userId + ' Com o token: ' + token);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('DADOS ENVIADOS PRA API:');
        console.log(data);

        axios.post('https://ferramong-auth.herokuapp.com/authenticator/login', {
            cpf: data.cpf,
            password: data.password,
        })
            .then(response => {
                console.log('DADOS DE RESPOSTA:');
                console.log(response);
                history.push('./addtool')
                setUserId(response.data.id)
                setToken(response.data.token)
                console.log('RECEBIDO DO LOGIN id:' + response.data.id + 'token: ' + response.data.token)
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
                    <input type="text" placeholder="CPF" {...register("cpf", { required: true })} />
                    {errors.cpf && errors.cpf.type === "required" && <span>Indique seu cpf</span>}
                    <input type="password" placeholder="Senha" {...register("password", { required: true })} />
                    {errors.password && errors.password.type === "required" && <span>Indique sua senha</span>}
                    <input type="submit" value="Entrar" id="button" />
                </form>
                <CreateAccount>
                    <h3>Não possui uma conta ainda? Cadastre-se <Link to="/register">aqui</Link> </h3>
                    <h3>Esqueceu sua senha? Clique <Link to="/forgotpassword">aqui</Link></h3>
                </CreateAccount>
            </Component>
        </Container>
    )
}
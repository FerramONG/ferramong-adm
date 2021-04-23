import React, { useState, useEffect } from 'react';
import { Container, Component } from './styles'
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useLogin } from '../../context/GlobalState'

export default function LoginBox() {

    const { userId, setUserId, token, setToken } = useLogin();
    const history = useHistory();
    useEffect(() => {
        axios.get('https://ferramong-auth.herokuapp.com/authenticator/validateToken/' + token)
        .then(response => {
            console.log('DADOS DE RESPOSTA DA CONFIRMACAO DE TOKEN:');
            console.log(response);
            // alert('Usuário já logado')
            history.push('./addtool');
        })
        .catch(error => {
            console.log('DADOS DE ERRO TOKEN:');
            console.log(error);
            //alert('Usuário não logado')
        })
    }, []);

    const [userQuestion, setUserQuestion] = useState('');
    const [userCpf, setUserCpf] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { register:register2, handleSubmit:handleSubmit2, formState: { errors:errors2 } } = useForm();
    

    const onSubmit = (data) => {
        console.log('DADOS ENVIADOS PRA API:');
        console.log(data);
        axios.post('https://ferramong-auth.herokuapp.com/accountManager/resetPassword',{
            cpf: userCpf,
            secretAnswer: data.secretAnswer,
            newPassword: data.newPassword,
        })
        .then(response => {
            console.log('DADOS DE RESPOSTA CHANGEPASSWORD:');
            console.log(response);
            history.push('./');
        })
        .catch(error => {
            console.log('DADOS DE ERRO CHANGEPASSWORD:');
            console.log(error);
        })
    }

    const submitCpf = (data) => {
        axios.get('https://ferramong-auth.herokuapp.com/accountManager/getSecretQuestion/' + data.cpf)
        .then(response => {
            console.log('DADOS DE RESPOSTA CPF:');
            console.log(response);
            setUserQuestion(response.data);
        })
        .catch(error => {
            console.log('DADOS DE ERRO CPF:');
            console.log(error);
        })
        setUserCpf(data.cpf);
    }

    return (
        <Container>
            <Component>
                <form className="cpf-form" onSubmit={handleSubmit2(submitCpf)}>
                    <input type="text" placeholder="Digite seu CPF" {...register2("cpf", { required: true })} />
                    {errors2.cpf && errors2.cpf.type === "required" && <span>Necessário informar cpf</span>}
                    <input type="submit" value="Pergunta secreta" id="button" />
                </form>
                <form className="change-password" onSubmit={handleSubmit(onSubmit)}>
                    <h3>{userQuestion}</h3>
                    <input type="text" placeholder="Resposta secreta" {...register("secretAnswer", { required: true })} />
                    {errors.secretAnswer && errors.secretAnswer.type === "required" && <span>Indique a resposta secreta</span>}
                    <input type="password" placeholder="Nova senha" {...register("newPassword", { required: true })} />
                    {errors.newPassword && errors.newPassword.type === "required" && <span>Indique a nova senha</span>}
                    <input type="submit" value="Mudar senha" id="button" />
                </form>
            </Component>
        </Container>
    )
}
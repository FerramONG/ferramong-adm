import React, { useEffect } from 'react';
import { Container, Component } from './styles'
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from '../../context/GlobalState'
import axios from 'axios'
import AddToolScheduler from '../AddToolScheduler'

export default function LoginBox() {

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
    }, [token]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Container>
            <Component>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Cadastrar nova ferramenta</h1>

                    <input type="text" id="name" placeholder="Nome" {...register("name", { required: true })} />
                    {errors.name && errors.name.type === "required" && <span>Necessário ter um nome</span>}

                    <textarea id="utility" placeholder="Utilidade" {...register("utility", { maxLength: 50 })} />
                    {errors.utility && errors.utility.type === "maxLength" && <span>Tamanho máximo excedido</span>}

                    <textarea id="instructions" placeholder="Instruções de uso" {...register("instructions", { maxLength: 50 })} />
                    {errors.instructions && errors.instructions.type === "maxLength" && <span>Tamanho máximo excedido</span>}

                    <input type="text" id="owner" placeholder="Dono" {...register("owner", { required: true })} />
                    {errors.owner && errors.owner.type === "required" && <span>Necessário ter um dono</span>}

                    <input type="text" id="price" placeholder="Preço" {...register("price", { required: true })} />
                    {errors.price && errors.price.type === "required" && <span>Necessário ter um preço</span>}

                    <input type="text" id="category" placeholder="Categoria" {...register("category", { required: true })} />
                    {errors.category && errors.category.value === "categoria" && <span>Necessário ter uma categoria</span>}

                    <div id='calendarBox'>
                        <div id='calendar'><AddToolScheduler title="Inicio" /></div>
                        <div id='calendar'><AddToolScheduler title="Fim" /></div>
                    </div>

                    {/*<Link to={"/"}>*/}<input type="submit" value="Adicionar" id="button" /> {/*</Link> com esse link pra outra página nao funcionava no console,tem que ver se na api vai*/}
                </form>
            </Component>
        </Container>
    )
}
import React from 'react';
import { Container, Component, } from './styles'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginBox() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Container>
            <Component>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Digite seu CPF" {...register("cpf")} />
                    <h3>Sua pergunta secreta</h3>
                    <input type="text" placeholder="Resposta secreta" {...register("secretAnswer")} />
                    <input type="password" placeholder="Nova senha" {...register("newPassword")} />
                    {/*<Link to={"/"}>*/}<input type="submit" value="Mudar senha" id="button" /> {/*</Link> com esse link pra outra página nao funcionava no console,tem que ver se na api vai*/}
                </form>
            </Component>
        </Container>
    )
}
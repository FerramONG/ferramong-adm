import React,{useEffect} from 'react';
import { Container, Component } from './styles'
import { Link,useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from '../../context/GlobalState'
import axios from 'axios'

export default function LoginBox() {

    const { userId, setUserId, token, setToken } = useLogin();
    const history = useHistory();
    useEffect(() => {
        axios.get('https://ferramong-auth.herokuapp.com/authenticator/validateToken/' + token)
        .then(response => {
            console.log('DADOS DE RESPOSTA DA CONFIRMACAO DE TOKEN:');
            console.log(response);
            alert('usuário logado')
        })
        .catch(error => {
            console.log('DADOS DE ERRO TOKEN:');
            console.log(error);
            alert('usuário não logado')
            //history.push('./');
        })
    }, []);

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

                    <input type="number" id="price" placeholder="Preço" {...register("price", { required: true })} />
                    {errors.price && errors.price.type === "required" && <span>Necessário ter um preço</span>}

                    <select id="category" {...register("category")}>

                        <option value="Jardinagem">Jardinagem</option>
                        <option value="Proteção">Proteção</option>
                        <option value="Marcenaria">Marcenaria</option>
                    </select>
                    {errors.category && errors.category.value === "categoria" && <span>Necessário ter uma categoria</span>}

                    <input type="text" id="deadline" placeholder="Data limite" {...register("deadline")} /> {/*AQUI TEM QUE COLOCAR O CALENDARIO PARA ENVIAR DATA */}
                    {errors.deadline && errors.deadline.type === "required" && <span>Necessário ter um nome</span>}

                    {/*<Link to={"/"}>*/}<input type="submit" value="Adicionar" id="button" /> {/*</Link> com esse link pra outra página nao funcionava no console,tem que ver se na api vai*/}
                </form>
            </Component>
        </Container>
    )
}
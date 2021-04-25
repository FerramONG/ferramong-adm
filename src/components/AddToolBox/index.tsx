import React, { useEffect } from 'react';
import { Container, Component } from './styles'
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from '../../context/GlobalState'
import axios from 'axios'
import AddToolSchedulerStart from '../AddToolSchedulerStart'
import AddToolSchedulerEnd from '../AddToolSchedulerEnd'

export default function LoginBox() {

    const { userId, setUserId, token, setToken, startDateTool, setStartDateTool, endDateTool, setEndDateTool } = useLogin();
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
            console.log('INFO DA FERRAMENTA MANDANDO PRA API')
            console.log(data.ownerId)
            console.log(data.name)
            console.log(data.category)
            console.log(data.description)
            console.log(data.instructions)
            console.log(startDateTool)
            console.log(endDateTool)
            console.log(data.price)



        // let postHeader = {
        //     headers: {
        //         'dwellerId': data.ownerId
        //     }
        //   };

        //FAZER UM IF PRA CASO startDateTool e/ou endDateTool sejam undefined

        // axios.post('https://ferramong-tools-manager.herokuapp.com/tools', {
        //     name: data.name,
        //     category:data.category,
        //     description: data.description,
        //     instructions: data.instructions,
        //     availableFrom: startDateTool,
        //     availableUntil: endDateTool
        // })
        //     .then(response => {
        //         console.log('CADASTROU FERRAMENTA')
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log('DEU ERRO NO CADASTRO DE FERRAMENTA')
        //         console.log(error)
        //     })
    }

    return (
        <Container>
            <Component>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Cadastrar nova ferramenta</h1>

                    <input type="text" id="name" placeholder="Nome" {...register("name", { required: true })} />
                    {errors.name && errors.name.type === "required" && <span>Necessário ter um nome</span>}

                    <textarea id="utility" placeholder="Descrição" {...register("description", { maxLength: 50 })} />
                    {errors.description && errors.description.type === "maxLength" && <span>Tamanho máximo excedido</span>}

                    <textarea id="instructions" placeholder="Instruções de uso" {...register("instructions", { maxLength: 50 })} />
                    {errors.instructions && errors.instructions.type === "maxLength" && <span>Tamanho máximo excedido</span>}

                    <input type="number" id="owner" placeholder="Id do dono" {...register("ownerId", { required: true })} />


                    <input type="number" id="price" placeholder="Preço" {...register("price", { required: true })} />
                    {errors.price && errors.price.type === "required" && <span>Necessário ter um preço</span>}

                    <input type="text" id="category" placeholder="Categoria" {...register("category", { required: true })} />
                    {errors.category && errors.category.value === "categoria" && <span>Necessário ter uma categoria</span>}

                    <div id='calendarBox'>
                        <div id='calendar'><AddToolSchedulerStart title="Inicio" /></div>
                        <div id='calendar'><AddToolSchedulerEnd title="Fim" /></div>
                    </div>

                    <input type="submit" value="Adicionar" id="button" />
                </form>
            </Component>
        </Container>
    )
}
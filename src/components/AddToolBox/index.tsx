import React, { useEffect, useState } from 'react';
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
    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm();
    const [ searchedId, setSearchedId ] = useState('');

    const onSearch = (data) => {
        axios.get('https://ferramong-auth.herokuapp.com/accountManager/getDweller/name/' + data.name)
            .then(response => {
                // console.log('PROCUROU ID PELO NOME')
                setSearchedId('O ID do usuário é: '+ response.data.id)
            })
            .catch(error => {
                console.log('DEU ERRO NA PROCURA PELO ID')
                console.log(error)
            })
    }

    const onSubmit = (data) => {
        console.log('INFO DA FERRAMENTA MANDANDO PRA API')
        console.log('ID do dono:'+data.ownerId)
        console.log('Nome da ferramenta:'+data.name)
        console.log('Categoria:'+data.category)
        console.log('Descrição:'+data.description)
        console.log('Instruções:'+data.instructions)
        console.log('Data inicio:'+startDateTool)
        console.log('Data fim:'+endDateTool)
        console.log('Preço:'+data.price)

        axios.post('https://ferramong-tools-manager.herokuapp.com/tools', {
            name: data.name,
            category: data.category,
            description: data.description,
            instructions: data.instructions,
            availableFrom: startDateTool,
            availableUntil: endDateTool,
            price: data.price
        },
            {
                headers: {
                    'dwellerId': parseInt(data.ownerId),
                }
            }
        )
            .then(response => {
                console.log('CADASTROU FERRAMENTA')
                console.log(response.status)
                if(response.status==201){
                    alert('Ferramenta cadastrada com sucesso!')
                }
            })
            .catch(error => {
                console.log('DEU ERRO NO CADASTRO DE FERRAMENTA')
                console.log(error)
            })
    }

    return (
        <Container>
            <Component>
                <h1>Não sabe o ID do usuário? Encontre aqui</h1>
                <form className="search-form" onSubmit={handleSubmit2(onSearch)}>
                    <input type="text" id="name" placeholder="Nome do dono" {...register2("name", { required: true })} />
                    {errors2.name && errors2.name.type === "required" && <span>Necessário informar nome</span>}
                    <h3>{searchedId}</h3>
                    <input type="submit" value="Procurar" id="buttonSearch" />
                </form>
            </Component>
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
import styled from 'styled-components';

export const Container = styled.div`
    padding-top:100px;
    display:flex;
    justify-content: center;
    font-family:'Roboto', sans-serif;
`;

export const Component = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 25px;
    padding: 100px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.7);
`;

export const BoxForm = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    input{
        background-color: #dedede;
        font-size:1.2rem;
        color:#5c5b5b;
        margin:10px 5px;
        padding:0.2rem;
        border-radius: 5px;
        border:none;
        outline:none;
    }

    input#button{
        cursor:pointer;
        background-color:#627fe7;
        color:white;
        padding: 0.5rem 1.5rem;
    }

    input#button:hover{
        background-color: rgba(98,127,231,0.7);
    }
`;

export const CreateAccount = styled.div`
    display:flex;
    h3{
        margin:10px 5px;
        color:#5c5b5b;
    }
`;
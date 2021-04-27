import styled from 'styled-components';

export const Box = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
    form{
        display:flex;
    }
    input{
        font-size:1.2rem;
        outline:none;
        border:none;
        box-shadow:2px 2px 5px rgba(0,0,0,0.7);
        border-radius:10px;
        margin:10px;
        padding:10px;
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    input#button{
            cursor:pointer;
            background-color:#627fe7;
            color:white;
            padding: 0.5rem 1.5rem;
        }
`;

export const Container = styled.div`
    padding-top:50px;
    display:flex;
    flex-direction:row;
    justify-content: center;
    font-family:'Roboto', sans-serif;
`;

export const Component = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    border-radius: 25px;
    padding: 50px;
    margin: 20px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.7);

    h2{
        align-self: flex-end;;
        padding:10px 30px;
        font-weight:600;
        font-size:1.2rem;
    }

    h1{
        padding:10px 30px;
        font-weight:bold;
        font-size:1.5rem;
        align-self: center;
    }

    button{
        cursor:pointer;
        background-color: #627fe7;
        padding: 0.5rem 1.2rem;
        margin-top: 20px;
        color:white;
        font-family:'Roboto', sans-serif;
        font-size:1.2rem;
        border:none;
        outline:none;
    }
`;

export const Report = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Table = styled.table`
    td{
        padding:10px 30px;
    }
`;
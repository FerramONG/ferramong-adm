import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const NavBar = styled.ol`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:3rem;
    width:100%;
    background-color: #627fe7;
    font-family:'Roboto', sans-serif;
    padding:0px 1rem;
    font-size:1.2rem;

    img{
        width:50px;
        height:50px;
    }

    .link{
        text-decoration:none;
    }
    /* position:fixed; */
`;

export const Item = styled.li`
    color:white;
    padding:1rem 1.5rem;
    cursor:pointer;
`;

export const SearchBar = styled.div`
    display:flex;
    align-items:center;
    color:white;
    min-width:40%;
    outline:none;
    input{
        border-radius:15px;
        border:none;
        padding:0.5rem;
        width:100%;
        color:#5c5b5b;
        font-size:1.2rem;
        outline:none;
    }
    padding:0px 2rem;
    button{
        cursor:pointer;
        outline:none;
        border:none;
        background:none;
        color:white;
    }
`;

export const Login = styled.div`
        background-color: white;
        color:#5c5b5b;
        padding:0.5rem 0.75rem;
        border-radius: 15px;
        outline:none;
        border:none;
        font-size:1.2rem;
        font-family:'Roboto',sans-serif;
        cursor:pointer;
`;
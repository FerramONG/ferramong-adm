import styled from 'styled-components';

export const Component = styled.div`

`;

export const ToolsContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    form{
        /* display:flex;
        align-items: center;
        justify-content: center; */
        input{
            font-size:1.2rem;
            outline:none;
            border:none;
            box-shadow:2px 2px 5px rgba(0,0,0,0.7);
            border-radius:10px;
            margin:10px;
            padding:10px;
        }
        input#button{
            background-color: #627fe7;
            color:white;
        }
        input#button:hover{
            cursor:pointer;
            background-color: rgba(98, 127, 231, 0.6)
        }
        span{
            margin:0px 20px;
            color:tomato;
            font-size:1.2rem;
            font-family:'Roboto', sans-serif;
        }
    }
`;
import styled from 'styled-components';

export const Container = styled.div`
    padding-top:10px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family:'Roboto', sans-serif;
`;

export const Component = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 25px;
    padding: 40px 100px;
    margin: 1rem;
    width:50%;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.7);

    h1{
        font-size:2rem;
        font-family:'Roboto', sans-serif;
        font-weight: bold;
        margin: 0px 10px;
    }

    h3{
        font-size: 1.2rem;
        font-family:'Roboto', sans-serif;
        margin: 0px 10px;
    }

    form{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: space-around;

        input,select,textarea{
            background-color: #dedede;
            font-size:1.2rem;
            color:#5c5b5b;
            margin:10px 5px;
            padding:0.2rem;
            border-radius: 5px;
            border:none;
            outline:none;
            font-family:'Roboto', sans-serif;
        }

        input#utility,
        input#instructions{
            
        }

        input#button,
        input#buttonSearch{
            cursor:pointer;
            background-color:#627fe7;
            color:white;
            padding: 0.5rem 1.5rem;
            width:50%;
            align-self: center;
        }

        input#button:hover,
        input#buttonSearch:hover{
            background-color: rgba(98,127,231,0.7);
        }

        span{
            margin: 0px 10px;
            font-family:'Roboto', sans-serif;
            font-weight: bold;
            color:tomato;
        }

        #calendarBox{
            display:flex;
            flex-direction:row;
            justify-content: center;
            #calendar{
                margin:10px;
            }

            span{
                color:white;
            }
        }
    }
`;


import React, { useState } from 'react';
import { Container, MainInfo, LeftPannel, NameCategory, ExtraInfo, Send } from './styles'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

interface ToolProps {
    img: string;
    name: string;
    category: string;
    price: string;
    utility: string;
    use: string;
}

export default function ToolBox(props: ToolProps) {

    const [expandedContainer, setExpandedContainer] = useState(false);

    const changeButton = () => {
        if (expandedContainer === true) {
            setExpandedContainer(false);
        }
        else {
            setExpandedContainer(true);
        }
    }

    return (
        <Container>
            <MainInfo>
                <LeftPannel>
                    <img src={props.img} alt="cortador de grama" />
                    <NameCategory>
                        <h2>{props.name}</h2>
                        <h6>{props.category}</h6>
                    </NameCategory>
                </LeftPannel>
                <h2>{props.price} CrediTools</h2>
            </MainInfo>

            <ExtraInfo className={expandedContainer ? "display" : "noDisplay"}>
                <h4><b>Utilidade: </b>{props.utility}</h4>
                <h4><b>Como usar: </b>{props.use}</h4>
            </ExtraInfo>

            <Send className={expandedContainer ? "display" : "noDisplay"}>
                <button>Quero!</button>
            </Send>

            <button type="button" className="expandedContainerButton" onClick={() => changeButton()}>
                {expandedContainer ? <RemoveIcon /> : <AddIcon />}
            </button>

        </Container>
    )
}
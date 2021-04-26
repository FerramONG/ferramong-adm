import React, { useState } from 'react';
import { Container, MainInfo, LeftPannel, NameCategory, ExtraInfo} from './styles'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AddToolSchedulerStart from '../AddToolSchedulerStart';
import AddToolSchedulerEnd from '../AddToolSchedulerEnd';
import { useLogin } from '../../context/GlobalState'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

interface ToolProps {
    name: string;
    category: string;
    ownerId: number;
    price: string;
    utility: string;
    use: string;
    toolId: number;
    availableUntil: string;
}

export default function ToolBox(props: ToolProps) {
    const { userId, setUserId, token, setToken, startDateTool, setStartDateTool, endDateTool, setEndDateTool } = useLogin();
    let ownerId = props.ownerId;
    let rentedToolId = props.toolId

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
                <h4><b>Disponível até: </b>{props.availableUntil}</h4>
                <h4><b>ID da ferramenta: </b>{props.toolId}</h4>
                <h4><b>ID do dono: </b>{props.ownerId}</h4>
            </ExtraInfo>

            <button type="button" className="expandedContainerButton" onClick={() => changeButton()}>
                {expandedContainer ? <RemoveIcon /> : <AddIcon />}
            </button>

        </Container>
    )
}
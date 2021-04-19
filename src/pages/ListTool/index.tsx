import React from 'react';
import Menu from '../../components/Menu'
import ToolBox from '../../components/ToolBox';
import data from '../../data/ToolsInfo'
import { ToolsContainer } from './styles'

const ListTool = () => {
    return (
        <div>
            <Menu />  
            <ToolsContainer>
                {data.map(purchase => {
                    return (
                        <ToolBox name={purchase.name} category={purchase.category}
                    price={purchase.price} utility={purchase.utility} use={purchase.use}></ToolBox>
                    )
                })}
            </ToolsContainer>
        </div>
    );
}
export default ListTool;
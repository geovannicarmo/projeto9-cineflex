import Selecione from "../Init/Selecione/Selecione"
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


export default function Success(){

    return(
<>
        <Selecione text={"Selecione o(s) assento(s)"}/> 

        <Texts> 
        
        <h1>Filme e sessão</h1> 

        <h1>Ingressos</h1>

        <h1>Comprador</h1>
        
        
        </Texts>
        </>
    )
}


const Texts=styled.div`

margin-left: 30px;
h1{
font-size: 24px;
margin-bottom: 20px;
}

`
import Selecione from "../Init/Selecione/Selecione"
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Success({dadosS}){

   
    console.log(dadosS)

    return(
<>
        <Selecione text={"Selecione o(s) assento(s)"}/> 

        <Texts> 
        
        <h1>Filme e sessão</h1> 
        <h2>{dadosS.title}</h2>
        <h2>{dadosS.dayMovie} {dadosS.hourMovie}</h2>

        <h1>Ingressos</h1>

        <h2>Assento {dadosS.nAsento[0]}</h2>
        <h2>Assento {dadosS.nAsento[2]}</h2>

        <h1>Comprador</h1>

        <h2>Nome: {dadosS.name}</h2>
        <h2>CPF: {dadosS.cpf}</h2>

      
        <Link to={`/`}>
        <Home>
        <h1 >Voltar pra Home</h1>
           
           
        </Home>
        </Link>
        
        </Texts>
        </>
    )
}


const Texts=styled.div`


margin-left: 30px;
h1{
font-size: 28px;
margin-bottom: 20px;
margin-top: 22x;
}

h2 {font-size:22px;
    margin-bottom: 10px;
    
}

`

const Home=styled.div`
display: flex;
align-content: center;
justify-content: center;
width: 60%;
height: 42px;
background-color: #E8833A;

margin-left: 30px;
h1{
font-size: 28px;
margin-bottom: 20px;
margin-top: 22x;
}



`
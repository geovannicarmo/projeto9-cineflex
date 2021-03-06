import Selecione from "../Init/Selecione/Selecione"
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Success({dadosS}){

function Assentos({assento}){

    return(
        <h1>Assento: {assento}</h1>

    )
}

    const cor= true;
    const arrayAssentos=[...dadosS.nAsento]

   


    return(
<Container>
        <Selecione text={"Selecione o(s) assento(s)"} cor={cor}/> 

        <Texts> 
        
        <h1>Filme e sessão</h1> 
        <h2>{dadosS.title}</h2>
        <h2>{dadosS.dayMovie} {dadosS.hourMovie}</h2>

        <h1>Ingressos</h1>

      

        {arrayAssentos.map((arrayAssentos, index) => <Assentos assento={arrayAssentos}  key={index}/> 
        )} 

        <h1>Comprador</h1>

        <h2>Nome: {dadosS.name}</h2>
        <h2>CPF: {dadosS.cpf}</h2>

      
        <Home>
        <Link to={`/`} >
        <h1 >Voltar pra Home</h1>
           
           
        </Link>
        </Home>
        
        </Texts>
        </Container>
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
text-decoration: none;
margin-left: 30px;
margin-top: 60px;
max-width: 250px;

a{
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin-top: 8px;
}

h1{
font-size: 28px;
margin-bottom: 20px;
margin-top: 22x;
color: black;

}

`
const Container=styled.div`
display: flex;
justify-content: center;
flex-direction: column;

`
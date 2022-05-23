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
    console.log(arrayAssentos)
   


    return(
<>
        <Selecione text={"Selecione o(s) assento(s)"} cor={cor}/> 

        <Texts> 
        
        <h1>Filme e sessão</h1> 
        <h2>{dadosS.title}</h2>
        <h2>{dadosS.dayMovie} {dadosS.hourMovie}</h2>

        <h1>Ingressos</h1>

        {/* <h2>Assento {dadosS.nAsento[0]}</h2>
        <h2>Assento {dadosS.nAsento[2]}</h2> */}
      

        {arrayAssentos.map((arrayAssentos, index) => <Assentos assento={arrayAssentos}  key={index}/> 
        )} 

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
text-decoration: none;
margin-left: 30px;

h1{
font-size: 28px;
margin-bottom: 20px;
margin-top: 22x;
text-decoration: none;
}



`
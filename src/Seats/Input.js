import  { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';




export default function Input({ids, nAsento, dadosConfirmacao, hourMovie, dayMovie, title, setDadosS}){

    const[cpf, setCpf] = useState("")
    const[name, setName] = useState("")

   
    let navigate = useNavigate();
    console.log(ids)
    console.log(nAsento)

    function postedate(event){

        

            event.preventDefault();

            const dados={ids, name, cpf}

            const sucesso={title, dayMovie, hourMovie, nAsento, name, cpf}
            console.log(sucesso);
            setDadosS({title, dayMovie, hourMovie, nAsento, name, cpf})
           
       
            dadosConfirmacao.name=name

            const requisicao = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', dados);

            requisicao.then(tratarSucesso);
            requisicao.catch(tratarFalha);
    }

    function tratarSucesso(resposta) {

        if(name===""||cpf==="" || nAsento.length===0){
            alert("É necessário preencher nome e CPF e selecionar ao menos 1 assento.")

        }
        else{
        const statusCode = resposta.status;
        console.log(statusCode);
        navigate(`/success/`);
        }
    }
    
    function tratarFalha(erro) {
        const statusCode = erro.response.status;
        console.log(statusCode);
    }



    return (
<>
    <form onSubmit={postedate}>
        <Form>
        <input placeholder="Nome"  onChange={e => setName(e.target.value)} />
        
        <input placeholder="CPF"  onChange={e => setCpf(e.target.value)} />

      
        <button type="submit">Reservar assento(s)</button>
       
        </Form>
        </form>
        </>
    )
} 


const Form = styled.div`

display: flex;
flex-direction: column;
justify-content: center;

input{


width: 80%;
height: 50px;
margin-bottom: 20px;
margin-top: 20px;
margin-left:  30px;
}

button{
    margin-top: 20px;
    border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 30px 30px;
  cursor: pointer;
    background-color: #E8833A;
}
`
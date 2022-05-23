import Selecione from "../Init/Selecione/Selecione"
import axios from "axios"
import { useEffect, useState } from "react"
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Legend from "./Legend";

import Rodape from "./Rodape"

import Seat from "./Seat"

import Input from "./Input";



export default function Seats({setDadosS}){
  
  
 
     const [asento, setAsento] = useState(null)
     const [movie, setMovie]= useState(null)

     const  { seatsId }  = useParams();
   
     useEffect(()=> {
        const request=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${seatsId}/seats`);

    request.then(resposta => {setAsento(resposta.data.seats);
        setMovie(resposta.data)
       
    });
},[])


const arraisl = []
const nAsento=[]
const dadosConfirmacao={name:""}

       
    return(
        <>
        <Selecione text={"Selecione o(s) assento(s)"}/>
        <Fileiras>
            
        { !asento ? 
        <></>
        :
        
        asento.map((asento) => <Seat asento={asento.name} nAsento={nAsento} key={asento.id} idAsento={asento.id}  isAvailable={asento.isAvailable} selected={false} arraisl={arraisl} />
       
        )}
        </Fileiras>
                <Legenda>
                    <Legend selecionado={true} text={"Selecionado"}/>
                    <Legend selecionado={false} text={"Disponível"}/>
                    <Legend selecionado={false} indisponivel={true} text={"Indisponível"}/>
                </Legenda>

                
            { !movie ?
            <></>
            :
        <Input ids={arraisl} nAsento={nAsento} hourMovie={movie.name} dayMovie={movie.day.date} title = {movie.movie.title} dadosConfirmacao={dadosConfirmacao} setDadosS={setDadosS} />
            }

<>
    <Space>
       
    </Space>
    </>

        { !movie ?
            <></>
            :   
       <Rodape  image={movie.movie.posterURL} hour={movie.name}  title={movie.movie.title} day={movie.day.weekday}/>
        }
   
        </>
    )
}

const Fileiras=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`;

const Space = styled.div `
height: 140px;
`
const Legenda = styled.div `
display: flex;
justify-content: space-around;
margin-top: 20px;
margin-bottom: 20px;
`
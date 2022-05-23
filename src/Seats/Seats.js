import Selecione from "../Init/Selecione/Selecione"
import axios from "axios"
import { useEffect, useState } from "react"
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

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
            
            { !movie ?
            <></>
            :
        <Input ids={arraisl} nAsento={nAsento} hourMovie={movie.name} dayMovie={movie.day.date} title = {movie.movie.title} dadosConfirmacao={dadosConfirmacao} setDadosS={setDadosS} />
            }

            

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


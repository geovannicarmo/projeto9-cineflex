import Selecione from "../Init/Selecione/Selecione"
import axios from "axios"
import { useEffect, useState } from "react"
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Seat from "./Seat"

import Input from "./Input";



export default function Seats(){

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
        <Input ids={arraisl} nAsento={nAsento} hourMovie={movie.name} dayMovie={movie.day.date} title = {movie.movie.title} dadosConfirmacao={dadosConfirmacao} />
            }


        <img className="poster" src={movie ? movie.movie.posterURL : null} alt="" /> 
        {movie ? <><h1>{movie.day.weekday}</h1> <h1>{movie.name}</h1></> : <></>}

       
   
        </>
    )
}

const Fileiras=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`;


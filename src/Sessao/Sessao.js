import Selecione from "../Init/Selecione/Selecione"
import axios from "axios"
import { useEffect, useState } from "react"
import "./Sessao.css"
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {Link } from "react-router-dom";


export default function Sessao({}){


    function Hour({hora, id}){

        console.log(hora)
        return(
            <Horario>
            <Link to={`/seats/${id}`}>
            
                
            <h1>{hora}</h1>
            
            </Link>
            </Horario>
        )
    }


    function Day({dia}){

        return (
            <>
            <Data>
                <h1>{dia.weekday}</h1>
                <h1>{dia.date}</h1>
                
            </Data>
            <Data>
            {dia.showtimes.map((hora, index) => <Hour hora={hora.name} id={hora.id}  key={index}/> 
        )}
           </Data>
            </>
        )
    }

    const [days, setDays]= useState([])
    const [movie, setMovie]= useState([])

    const  { sessaoId }  = useParams();
    

    useEffect(()=> {
        const request=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${sessaoId}/showtimes`);

    request.then(resposta => {setDays(resposta.data.days);
        setMovie(resposta.data)
        
        
    });
},[])


  console.log(movie)
    return(
        <>
        <Selecione text={"Selecione a sessão."}/>

        
        
        {days.map((days, index) => <Day dia={days}  key={index}/> 
        )}

        <img className="poster" src={movie.posterURL} alt="" />  
        <h1>{movie.title}</h1>    
        </>
    )
}


const Horario = styled.div`
width: 40%;
height: 43px;
background-color: #E8833A;
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
color: #FFFFFF;
font-size: 18px;

h1{
        margin-left: 10px;
}

`;

const Data = styled.div `
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
`;
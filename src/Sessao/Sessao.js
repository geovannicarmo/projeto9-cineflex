import Selecione from "../Init/Selecione/Selecione"
import axios from "axios"
import { useEffect, useState } from "react"
import "./Sessao.css"
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {Link } from "react-router-dom";
import Rodape from "../Seats/Rodape";


export default function Sessao({}){


    function Hour({hora, id}){

        
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
                <h1>{dia.weekday} {dia.date}</h1>
                
                
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


    return(
        <>
        <Selecione text={"Selecione a sessão."}/>

        
        
        {days.map((days, index) => <Day dia={days}  key={index}/> 
        )}
    <>
    <Space>
        
    </Space>
    </>

        { !movie ?
            <></>
            :   
       <Rodape  image={movie.posterURL} hour={movie.name}  title={movie.title} />
        }
        </>
    )
}


const Horario = styled.div`
width: 30%;
margin-left: 50px;
height: 43px;
background-color: #E8833A;
margin: 10px;
color: #FFFFFF;
font-size: 18px;
min-width: 80px;
max-width: 200px;

a{
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
}


h1{
        justify-content: space-between;
}

`;

const Data = styled.div `
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
margin: 8px;
`;

const Space = styled.div `
height: 140px;
`

import Selecione from "../Init/Selecione/Selecione"
import axios from "axios"
import { useEffect, useState } from "react"
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


export default function Seats(){


    function Seat({asento}){
        return(
            <Number onClick={()=>console.log(asento)}>
                {asento}
            </Number>

        )
    }

     const [asento, setAsento] = useState(null)
     const [movie, setMovie]= useState(null)

     const  { seatsId }  = useParams();
   
     useEffect(()=> {
        const request=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${seatsId}/seats`);

    request.then(resposta => {setAsento(resposta.data.seats);
        setMovie(resposta.data)
       
       
        
        
    });
},[])
       
    return(
        <>
        <Selecione text={"Selecione o(s) assento(s)"}/>
        <Fileiras>
            
        { !asento ? 
        <></>
        :
        
        asento.map((asento, index) => <Seat asento={asento.name}  key={index}/> 
        )}
        </Fileiras>

        <img className="poster" src={movie ? movie.movie.posterURL : null} alt="" />  
        {movie ? <><h1>{movie.day.weekday}</h1> <h1>{movie.name}</h1></> : <></>}
      
       

        </>
    )
}


const Number=styled.div`
background-color: #C3CFD9;
width: 30px;
height: 30px;
border-radius: 100%;
display: flex;
margin: 5px;
justify-content: center;
align-items: center;
`;

const Fileiras=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`;
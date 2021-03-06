import axios from 'axios';
import { useState, useEffect } from "react"
import "./Init.css"
import Selecione from './Selecione/Selecione';
import {Link } from "react-router-dom";


export default function Init(){

    function Cartaz({poster, idFilme}){
        
        return(
            <>
            <div className="borda">
                <Link to={`/sessao/${idFilme}`}>
                    <img className="poster1" src= {poster} alt="" />
                
                    </Link>
               
            </div>
            </>
        )
    }

   const [movies, setMovies] = useState([]);

   useEffect(() => {

    const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

    request.then(resposta => {
     setMovies(resposta.data);
    
     
    });

   }, []);


  



    return(
        <>
        <Selecione text={"Selecione o filme"} />
        <div className="cartaz">
        {movies.map((movies, index) => <Cartaz poster={movies.posterURL} idFilme={movies.id} key={index}/> 
        )}
        </div>
     </>

    )
}




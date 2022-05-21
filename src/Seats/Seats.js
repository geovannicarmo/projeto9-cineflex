import Selecione from "../Init/Selecione/Selecione"
import axios from "axios"
import { useEffect, useState } from "react"
import styled from 'styled-components';
import { useParams } from 'react-router-dom';



export default function Seats(){

    


    function Seat({asento, isAvailable, selected, setarrayslct, arrayslct, arraisl}){
        
        const [slct, setSlct] = useState(selected);

          if(slct===true){

            arraisl.push(asento)
          }

          function jamarcado(){
            
                setSlct(false)

                arraisl.splice(arraisl.indexOf(asento), 1);
          }

          
        
        return(
            <Number habilitado={isAvailable} selecionado={slct} 
            onClick={()=> isAvailable ? alert("Esse assento não está disponível") : !slct ? setSlct(true) : jamarcado()}>
                {asento}

               
            </Number>

        )
    }

     const [asento, setAsento] = useState(null)
     const [movie, setMovie]= useState(null)

     const [arrayslct, setArrayslct]= useState([1])
    


     const  { seatsId }  = useParams();
   
     useEffect(()=> {
        const request=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${seatsId}/seats`);

    request.then(resposta => {setAsento(resposta.data.seats);
        setMovie(resposta.data)
       
    });
},[])


const arraisl = []
const igual1=[]

       
    return(
        <>
        <Selecione text={"Selecione o(s) assento(s)"}/>
        <Fileiras>
            
        { !asento ? 
        <></>
        :
        
        asento.map((asento) => <Seat asento={asento.name}  key={asento.id} isAvailable={asento.isAvailable} selected={false} arrayslct={arrayslct} setArrayslct={setArrayslct} arraisl={arraisl} igual1={igual1}/>
       
        )}
        </Fileiras>

        <img className="poster" src={movie ? movie.movie.posterURL : null} alt="" />  


        {movie ? <><h1>{movie.day.weekday}</h1> <h1>{movie.name}</h1></> : <></>}
      
       <button onClick={()=>(console.log(arraisl))}>TEXTE</button>

        </>
    )
}


const Number=styled.div`

background-color: ${props => props.habilitado ? "#FBE192" : !props.selecionado ? "#C3CFD9" : "#8DD7CF"};
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
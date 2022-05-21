import { useEffect, useState } from "react"
import styled from 'styled-components';

export default function Seat({asento, isAvailable, selected, arraisl, idAsento, nAsento}){
        
    const [slct, setSlct] = useState(selected);

      if(slct===true){

        arraisl.push(idAsento)
        nAsento.push(asento)
      }

      function jamarcado(){
        
            setSlct(false)

            arraisl.splice(arraisl.indexOf(asento), 1);
      }

      
    
    return(
        <Number habilitado={isAvailable} selecionado={slct} 
        onClick={()=> !isAvailable ? alert("Esse assento não está disponível") : !slct ? setSlct(true) : jamarcado()}>
            {asento}

           
        </Number>

    )
}

const Number=styled.div`

background-color: ${props => !props.habilitado ? "#FBE192" : !props.selecionado ? "#C3CFD9" : "#8DD7CF"};
width: 30px;
height: 30px;
border-radius: 100%;
display: flex;
margin: 5px;
justify-content: center;
align-items: center;
`;


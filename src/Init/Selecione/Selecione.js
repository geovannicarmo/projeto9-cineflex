import './Selecione.css'
import styled from 'styled-components';

export default function Selecione({text, cor}){
    
    return (
        <Number corlo={cor}>

                <h2>{text}</h2>
        </Number>
       
    )
}


const Number=styled.div`


width: 100%;
height: 110px;
  margin-top: 67px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2{
    color: ${props => !props.corlo ? "#293845" : "#247A6B"};

font-size: 26px;
font-weight: 400;
}


`
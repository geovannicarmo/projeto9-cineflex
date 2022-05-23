import styled from "styled-components";

export default function Legend({selecionado, indisponivel, text}){


    return(
        <>
        <div>
        <Number selecionado={selecionado} indisponivel={indisponivel} >
        
        </Number>

        <h1>{text}</h1>
        </div>
        </>
    )
}

const Number=styled.div`

background-color: ${props => props.selecionado ? "#8DD7CF" : !props.indisponivel ? "#C3CFD9" : "#FBE192"};
width: 30px;
height: 30px;
border-radius: 100%;
display: flex;
margin: 5px;
justify-content: center;
align-items: center;
margin-left: 20px;
`;




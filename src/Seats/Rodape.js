import styled from "styled-components"



export default function Rodape({image, hour, title, day}){
    console.log (image)

    return(
        <Botton>
       
        <img src={image} alt="" />
        <div>
        <h1>{title}</h1>
        <h1>{day} - {hour}</h1>
        </div>

        
        </Botton>
    )
}



const Botton=styled.div`
width: 100%;
height: 117px;
background-color: 
#9EADBA;
display: flex;
font-size: 30px;
align-items: center;
margin-top: 60px;



img{
    height: 115px;
    width: 110px;
    margin-right: 20px;
}

h1{
    margin-bottom: 10px;
}

`

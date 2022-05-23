import styled from "styled-components"



export default function Rodape({image, hour, title, day}){
    console.log (image)

    return(
        <Botton>
       <Img>
        <img src={image} alt="" />
        </Img>
        <div>
        <h1>{title}</h1>
        <h1>{day} 
        {day ? <> - </>: <></>}
         {hour}</h1>
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
position: fixed;
bottom: 0px;
margin-top: 500px;



img{
    height: 89px;
width: 64px;
   
}

h1{
    margin-bottom: 10px;
    font-weight: bold;
}

`

const Img=styled.div`
background-color: #FFFFFF;
height: 99px;
width: 74px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 15px;
margin-right: 20px;

`

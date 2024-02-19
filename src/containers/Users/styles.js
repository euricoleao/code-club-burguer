import styled from "styled-components";
import Backgrounder from "../../assets/fundo.jpg"
import Background from "../../assets/background.svg"


export const ImgBackground = styled.div`
background: url("${Backgrounder}");
background-size: cover;
height: 100vh;
border-bottom: 20px solid black;
border-top: 20px solid black;
`;

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
width: 414px;
height: 95%;
min-height: 90vh;
display: flex;
margin-left: 700px;
display: flex;
align-items: center;
flex-direction: column;
border-radius: 20px;

    

`;

export const Image = styled.img`
width: 342px;
height: 354px;
left: 36px;


`;

export const User = styled.li `
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    margin-top: 5px;
    background: #696969;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    width:342px;
    height: 101px;
    cursor: pointer;
    &:hover{
   background-color:#363636;
   color:blue;
    
   }
    &:hover{
    color: red;
}

   p{
    
   padding-left: 10px;
   padding-top: 10px;
  
   }
   p{
    color: white;
    font-size: 20px;
    margin-left: 18px;
    font-style:italic;
    font-weight: 300;
   
   }

   
    button{
        background: none;
        border: none;
        cursor: pointer;
        position: absolute;
        margin-left: 310px;
        margin-top: 30px;
      
        

    }
`;


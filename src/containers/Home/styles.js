import styled from 'styled-components'
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
min-height: 80vh;
display: flex;
margin-left: 700px;
display: flex;
align-items: center;
flex-direction: column;
border-radius: 20px;
padding-bottom:10px;
`;

export const Image = styled.img ` 
width: 342px;
height: 354px;
margin-top: 11px;
left: 36px;

`;



export const InputLabel = styled.p `
color: white;
letter-spacing: -0.41px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
margin-left: 36px;
margin-bottom: -10px;

`;

export const InputLabel1 = styled.p `
color: white;
letter-spacing: -0.41px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
margin-left: 36px;
margin-bottom: -10px;
margin-top: 6px;
`;
export const Input = styled.input `
width: 342px;
height: 58px;
top: 521px;
gap: 18px;
border-radius: 20px;
background: rgba(255, 255, 255, 0.25);
padding-left: 20px;
margin-left: 15px;
font-size: 18px;
color: white;
top: 521px;
gap: 18px;
margin-bottom: 20px;
`;


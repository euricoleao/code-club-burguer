import styled from 'styled-components'

export const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
Width:342px;
Height:68px;
margin-top: ${props => props.isBack ? '30px' : '70px'};
background: #D93856;
gap: 14px;
font-size:25px;
align-items: center;
font-weight: 900;
font: italic;
color: white;
border-radius: 10px;
margin-left:${props => props.isBack ? '20px' : '15px'}; 
text-decoration: none;
cursor: pointer;

&:hover{
    opacity: 0.8;
}
&:hover{
    opacity: 0.3;
}

`;


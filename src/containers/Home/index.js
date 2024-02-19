import React, { useState, useRef } from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";


import Burguer from "../../assets/burguer.svg";
///////////////////////////////////////////
//components
import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"
import  Button  from "../../components/Button"

import {
  ImgBackground,
  Container,
  Image,
  InputLabel,
  InputLabel1,
  Input,
  
} from './styles'

const Home = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  const inputOrder = useRef();
  const inputName = useRef();


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      order: inputOrder.current.value,
      name: inputName.current.value
    });

    setUsers([...users,
      newUser,
    ]);
    //botão p/chamar pagina pedidos
      history.push('/pedidos');
    
  }



  return (
 <ImgBackground >
    <Container>

      <Image alt="logo-hamburguer" src={Burguer} />

      <ContainerItens>
        <H1>Faça o seu Pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder='Digite seu pedido' />

        <InputLabel1>Nome do Cliente</InputLabel1>
        <Input ref={inputName} placeholder='Digite seu nome' />
        <Button onClick={addNewUser}>Novo Pedido</Button>
        
      </ContainerItens>
    </Container>
    </ImgBackground>
  )
}

export default Home;
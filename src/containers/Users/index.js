
import React, { useState, useEffect } from "react";
import axios from "axios"
import { useHistory } from 'react-router-dom'

import Burguerthu from "../../assets/burger1.svg";
import Trash from "../../assets/trash.svg";

//components ///////////////
import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"
import  Button  from "../../components/Button"

import {
  ImgBackground,
  Container,
  Image,
  User

} from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory()//botão p/chamar pag.home

  useEffect(() => {
    async function fetchUser() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers);
    }
    fetchUser()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers)
  }
  function goBackPage() {//botão p/chamar pagina home
    history.push('/');
  }

  return (
    <ImgBackground>

      <Container>
        <Image alt="logo-hamburguer" src={Burguerthu} />
        <ContainerItens >
          <H1> Pedidos!</H1>


          <ul>
            {users.map((user) => (
              <User key={user.id}>
                <p>{user.order}</p> <br></br>
                <p>{user.name}</p>

                <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata de lixo" /></button>
              </User>
            ))

            }
          </ul>

          <Button isBack={true} onClick={goBackPage} >Voltar</Button>

        </ContainerItens>
      </Container>
    </ImgBackground>

  );



}
export default Users;
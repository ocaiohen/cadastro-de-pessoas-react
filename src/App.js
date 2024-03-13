import React, {useState, useRef, useEffect} from "react"
import { v4 as uuidv4 } from 'uuid'
import axios from "axios"
import 
{
  MainContainer, 
  MainContent, 
  H1,
  RegisterInput,
  LabelForInput,
  RegisterButton,
  ListOfUsersCards,
  UserCard,
  NameText,
  ButtonTrashCan
} 
from "./Styles.js";

const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

   const addNewUser = async () => {
    if(inputName.current.value && inputAge.current.value){
      const id = uuidv4()
      const age = inputAge.current.value
      const name = inputName.current.value
      await axios.post("http://localhost:3001/documents", {
       id: id,
       name: name,
       age: age
      })
      // console.log(response.data)
      // console.log(await axios.get("http://localhost:3001/documents"))
      const {data: newUsers} = await axios.get("http://localhost:3001/documents")
      setUsers(newUsers)
    }
    else{
      alert("Insira os valores nos dois inputs.")
    }
  }

  useEffect(()=>{
    const getAndSetUsers = async () => {
      const {data: newUsers} = await axios.get("http://localhost:3001/documents")
      setUsers(newUsers)
    }
    getAndSetUsers()
  },[])

  const deleteUser = (id) =>{
    const newUsers = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }
  return (
    <MainContainer>
      <MainContent>
        <H1>User Registration</H1>

        <LabelForInput htmlFor = "input-name">Name</LabelForInput>
        <RegisterInput ref = {inputName} id = "input-name" placeholder="Name"></RegisterInput>

        <LabelForInput htmlFor = "input-age">Age</LabelForInput>
        <RegisterInput ref = {inputAge} id = "input-age" type = "number" placeholder="Age"></RegisterInput>
        
        <RegisterButton onClick={addNewUser}>Register</RegisterButton>

        <ListOfUsersCards>
          {
          users.map((user) => (
            <UserCard key = {user.id}>
              <NameText>{user.name}</NameText> 
              <p>{user.age}</p>
              <ButtonTrashCan onClick={() => deleteUser(user.id)}></ButtonTrashCan>
            </UserCard>
            )
          )
          }       
        </ListOfUsersCards>
      </MainContent>  
    </MainContainer>
    
  );
}

export default App
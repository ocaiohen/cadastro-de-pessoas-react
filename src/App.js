import React, {useState, useRef} from "react";
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
import { v4 as uuidv4 } from 'uuid'
const App = () => {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  const addNewUser = () => {
    if(inputName.current.value && inputAge.current.value){
      setUsers([...users, {id : uuidv4(), name: inputName.current.value, age: inputAge.current.value}])
    }
    else{
      alert("Insira os valores nos dois inputs.")
    }
  }
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
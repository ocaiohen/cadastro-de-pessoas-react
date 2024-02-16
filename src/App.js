import React from "react";
import 
{
  MainContainer, 
  MainContent, 
  H1,
  RegisterInput,
  LabelForInput,
  RegisterButton
} 
  from "./Styles.js";

const App = () => {
  console.log("Cheguei")

  return (
    <MainContainer>
      <MainContent>
        <H1>HORSE</H1>

        <LabelForInput for = "input-name">Name</LabelForInput>
        <RegisterInput id = "input-name" placeholder="Name"></RegisterInput>

        <LabelForInput for = "input-age">Age</LabelForInput>
        <RegisterInput id = "input-age" type = "number" placeholder="Age"></RegisterInput>
        
        <RegisterButton>Register</RegisterButton>

      </MainContent>  
    </MainContainer>
    
  );
}

export default App
import styled from "styled-components"
import Background from "./Assets/Fundo Cadastro de Pessoas.png";

export const MainContainer = styled.main`
    background: url("${Background}");
    height: 100vh;
    width: 100vw;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const MainContent = styled.div`
    background-color: rgba(244, 244, 244, 0.60); 
    width: 400px;
    min-height: 650px;
    border-radius: 50px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.3);
`
export const H1 = styled.h1`
    font-size: 22px;
    color: white;
    font-weight: 600;
    margin-bottom: 20px;
`
export const RegisterInput = styled.input`
    width: 100%;
    height: 67px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 5px 5px rgba(0, 0, 0, 0.3);
    padding: 15px;
    border: none;
    outline: none;
    font-size: 18px;
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
}
`
export const LabelForInput = styled.label`
    font-size: 18px;
    font-weight: 500;
    color: white;
    margin-left: 25px;
    width: 100%;
    text-align: left;
    margin-top: 17px;
    margin-bottom: 5px;
    
`
export const RegisterButton = styled.button`
    width: 100%;
    background-color: #333333;
    height: 75px;
    cursor: pointer;
    color: white;
    border-radius: 24px;
    font-size: 18px;
    font-weight: 700;
    margin-top: 35px;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.3);
`
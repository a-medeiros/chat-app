import React from 'react'
import "./Home.css";
import styled from "styled-components";

const Home = () => {
    return (
        <MainDiv>
            <JoinChat>
                <div className="welcome-div">
                    <h1>Bem vindo ao Chatroom!</h1>
                </div>
                <div className="intro-text-div">
                    <p className="intro-text-p" data-testid="intro-text">
                        O chatroom é uma ótima forma de fazer novos amigos. Basta escolher como você quer ser chamado, 
                        dizer quais são seus interesses e clicar no botão “Fazer novo amigo”. Simples assim!
                        O Chatroom vai procurar alguém que tenha os mesmos interesse que você e, quando encontrar, vai
                        colocar vocês em uma sala para conversar.
                    </p>
                </div>
                <JoinChatForm>
                    <div className="input-div">
                        <label>Username </label>
                        <input data-testid="username-input" />
                    </div>
                    <div className="input-div">
                        <label>Quais são seus interesses?</label>
                        <input data-testid="interests-input" />
                    </div>
                    <JoinChatButton data-testid="submit-button">Fazer novo amigo<i class="fas fa-arrow-right"></i></JoinChatButton>
                </JoinChatForm>
            </JoinChat>
        </MainDiv>
    )
}

export default Home;

const MainDiv = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9e6ff;
`

const JoinChat = styled.div`
    width: 600px;
    background-color: white;
`

const JoinChatForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`

const JoinChatButton = styled.button`
    margin-top: 5px;
    padding: 10px;
    font-size: 15px;
    cursor: pointer;
    border: 1px solid black;
    background-color: black;
    color: white;
    i {
        margin-left: 7px;
    }
`
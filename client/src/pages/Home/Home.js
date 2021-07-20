import React, { useState } from 'react'
import "./Home.css";
import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";

const Home = () => {
    const [profilePhoto, setProfilePhoto] = useState("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.softdownload.com.br%2Fwp-content%2Fuploads%2F2018%2F03%2Fcomo_trocar_foto_perfil_facebook.jpg&f=1&nofb=1");

    const uploadImage = (e) => {
        const file = e.target.files[0];

        if(file) {
            const reader = new FileReader();

            reader.onload = function() {
                setProfilePhoto(reader.result);
            };

            reader.readAsDataURL(file);
        }

    }

    return (
        <MainDiv>
            <JoinChat>
                <header className="chatroom">
                    <h1>Chatroom</h1>
                </header>
                <div className="description">
                    <p data-testid="description">
                        O chatroom é uma ótima forma de fazer novos amigos. Basta escolher como você quer ser chamado, 
                        dizer quais são seus interesses, adicionar uma foto e clicar no botão “Fazer novo amigo”. Simples assim!
                        O Chatroom vai procurar alguém que tenha os mesmos interesse que você e, quando encontrar, vai
                        colocar vocês em uma sala para conversar.
                    </p>
                </div>
                <JoinChatForm>
                    <div className="input-field">
                        <label>Nome</label>
                        <input placeholder="Ex: Felipe" data-testid="name-field" required />
                    </div>
                    <div className="input-field">
                        <label>Quais são seus interesses?</label>
                        <textarea placeholder="Ex: Filmes, esportes, games" data-testid="interests-field" required ></textarea>
                    </div>
                    <div className="choose-photo">
                        <label for="chooseProfilePhoto" >Escolha sua foto de perfil:</label>
                        <input type="file" id="chooseProfilePhoto" name="chooseProfilePhoto" accept="image/*" onChange={uploadImage} data-testid="choose-profile-photo" />
                        <span>Como sua foto vai ficar:</span>
                        <div className="profile-photo-preview">
                            <ProfilePhotoPreview src={profilePhoto} alt="Profile photo" /> 
                        </div>
                    </div>
                    <Link to="/chat" >
                        <JoinChatButton data-testid="new-friend-button">Fazer novo amigo<i className="fas fa-arrow-right"></i></JoinChatButton>
                    </Link>
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
    background-color: #f1f1f1;
`

const JoinChat = styled.main`
    width: 600px;
    background-color: white;
    border: 1px solid lightgrey;
    font-family: 'Poppins', sans-serif;
    padding: 5px;
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
    background-color: #2952a3;
    border: 1px solid #2952a3;
    color: white;
    font-family: 'Poppins', sans-serif;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    i {
        margin-left: 7px;
    }
`

const ProfilePhotoPreview = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 100%;
`
import React, { useState } from "react";
import "./Home.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.softdownload.com.br%2Fwp-content%2Fuploads%2F2018%2F03%2Fcomo_trocar_foto_perfil_facebook.jpg&f=1&nofb=1"
  );
  const [isUsernameEmpty, setIsUsernameEmpty] = useState(false);
  const [isRoomEmpty, setIsRoomEmpty] = useState(false);

  const changeProfilePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function () {
        setProfilePhoto(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleJoinChat = (e) => {
    if (!username) {
      e.preventDefault();
      setIsUsernameEmpty(true);
    } else {
      setIsUsernameEmpty(false);
    }

    if (!room) {
      e.preventDefault();
      setIsRoomEmpty(true);
    } else {
      setIsRoomEmpty(false);
    }
  };

  return (
    <MainDiv>
      <JoinChat>
        <header className='chatroom'>
          <h1>Chatroom</h1>
        </header>
        <JoinChatForm>
          <div className='input-field'>
            <label>Nome</label>
            <input
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Ex: Felipe'
              data-testid='name-field'
              required
              autoFocus
            />
            {isUsernameEmpty ? (
              <ErrorMessage>
                <p>Escolha um nome de usuário!</p>
              </ErrorMessage>
            ) : null}
          </div>
          <div className='select-room'>
            <label>Escolha uma sala</label>
            <select
              id='room'
              name='room'
              onChange={(e) => setRoom(e.target.value)}
            >
              <option value=''>----</option>
              <option value='Futebol'>Futebol</option>
              <option value='Game'>Game</option>
              <option value='Séries'>Séries</option>
              <option value='Animes'>Animes</option>
              <option value='Filmes'>Filmes</option>
              <option value='Kpop'>Kpop</option>
              <option value='Produtividade'>Produtividade</option>
              <option value='Fitness'>Fitness</option>
              <option value='Programação'>Programação</option>
              <option value='Ancap'>Ancap</option>
            </select>
            {isRoomEmpty ? (
              <ErrorMessage>
                <p>Escolha uma sala!</p>
              </ErrorMessage>
            ) : null}
          </div>
          <div className='choose-photo'>
            <label>Escolha sua foto de perfil:</label>
            <input
              type='file'
              id='chooseProfilePhoto'
              name='chooseProfilePhoto'
              accept='image/*'
              onClick={changeProfilePhoto}
              data-testid='choose-profile-photo'
            />
            <span>Como sua foto vai ficar:</span>
            <div className='profile-photo-preview'>
              <ProfilePhotoPreview src={profilePhoto} alt='Profile photo' />
            </div>
          </div>
          <Link
            onClick={handleJoinChat}
            to={`/chat?username=${username}&room=${room}&profilephoto=${profilePhoto}`}
          >
            <JoinChatButton type='submit' data-testid='new-friend-button'>
              Encontrar um novo amigo<i className='fas fa-arrow-right'></i>
            </JoinChatButton>
          </Link>
        </JoinChatForm>
      </JoinChat>
    </MainDiv>
  );
};

export default Home;

const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
`;

const JoinChat = styled.main`
  width: 600px;
  background-color: white;
  border: 1px solid lightgrey;
  font-family: "Poppins", sans-serif;
  padding: 5px;
`;

const JoinChatForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const JoinChatButton = styled.button`
  margin-top: 5px;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  background-color: #2952a3;
  border: 1px solid #2952a3;
  color: white;
  font-family: "Poppins", sans-serif;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  i {
    margin-left: 7px;
  }
`;

const ProfilePhotoPreview = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 13px;
`;

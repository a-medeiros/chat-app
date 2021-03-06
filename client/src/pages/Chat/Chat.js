import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import styled from "styled-components";
import io from "socket.io-client";
import queryString from "query-string";

const Chat = () => {
  const socketRef = useRef();
  const [message, setMessage] = useState({
    username: "",
    text: "",
  });
  const [messages, setMessages] = useState([]);
  const messageInput = useRef();
  const { username, room } = queryString.parse(window.location.search);

  useEffect(() => {
    socketRef.current = io("https://webchatt-application.herokuapp.com/");

    socketRef.current.emit("joinRoom", { username, room });

    socketRef.current.on("message", (message) => {
      outputMessage(message);
      const chat = document.getElementById("chatScreen");
      chat.scrollTop = chat.scrollHeight;
    });

    socketRef.current.on("new message", (message) => {
      outputMessage(message);
    });
  }, [username, room]);

  const newMessage = (e) => {
    setMessage({
      username: username,
      text: e.target.value,
    });
  };

  const sendMessageOnSubmit = (e) => {
    e.preventDefault();

    if (message.text === "") {
      return undefined;
    } else {
      socketRef.current.emit("message", message);

      setMessage({
        username: "",
        text: "",
      });
      messageInput.current.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessageOnSubmit(e);
    }
  };

  const outputMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const leaveTheChat = () => {
    window.location = '../'
  }

  return (
    <MainDiv>
      <Room>
        <section>
          <h2># {room}</h2>
        </section>
      </Room>
      <ChatDiv>
        <ChatScreen id='chatScreen'>
          {messages.map((message) =>
            <Message>
              <div className='username-and-message-div'>
                <Me>{message.username}</Me>
                <MessageContent>{message.text}</MessageContent>
              </div>
            </Message>
          )}
        </ChatScreen>
        <SubmitMessageForm onSubmit={sendMessageOnSubmit}>
          <LeaveTheChat onClick={leaveTheChat}>Sair</LeaveTheChat>
          <MessageInput
            ref={messageInput}
            id='message'
            name='message'
            value={message.text}
            onChange={newMessage}
            onKeyPress={handleKeyPress}
            data-testid='message-input'
            autoFocus
          />
          <SubmitMessageButton
            type='submit'
            data-testid='submit-message-button'
          >
            <i class="fas fa-paper-plane"></i>
          </SubmitMessageButton>
        </SubmitMessageForm>
      </ChatDiv>
    </MainDiv>
  );
};

export default Chat;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Room = styled.div`
  height: 8vh;
  width: 70%;
  display: flex;
  padding: 10px;
  background-color: #000000;
  color: white;
  h2 {
    font-size: 35px;
  }

  @media (max-width: 700px) {
    width: 99%;
  }

`;

const ChatDiv = styled.div`
  width: 70%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    width: 99%;
  }
`;

const ChatScreen = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 7px 0px;
  background-color: #f1f1f1;
  border: 1px solid lightgrey;
`;

const Message = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 15px;
  min-width: 40px;
  font-family: "Roboto", sans-serif;
  div {
    background-color: white;
  }
`;

const SubmitMessageForm = styled.form`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 10%;
  margin-bottom: 7px;

  @media (max-width: 500px) {
    height: 8%;
  }
`;

const LeaveTheChat = styled.button`
  width: 130px;
  margin: 2px;
  cursor: pointer;
  background-color: #b30000;
  border: 1px solid #b30000;
  border-radius: 3px;
  color: white;
  font-weight: bolder;
  font-size: 17px;
  :hover {
    background-color: #cc0000;
    border: 1px solid #cc0000;
  }

  @media (max-width: 500px) {
    width: 85px;
  }
`;

const MessageInput = styled.textarea`
  width: 90%;
  border: 1px solid lightgrey;
  padding: 10px;
  outline: none;
  font-size: 15px;
  margin: 2px;
  font-family: "Roboto", sans-serif;
`;

const SubmitMessageButton = styled.button`
  width: 130px;
  padding: 10px;
  margin: 2px;
  cursor: pointer;
  background-color: #1a8cff;
  border: 1px solid #1a8cff;
  border-radius: 3px;
  color: white;
  font-weight: bolder;
  :hover {
    background-color: #3399ff;
    border: 1px solid #3399ff;
  }

  i {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    width: 80px;

    i {
      font-size: 17px;
    }
  }
`;

const Me = styled.span`
  font-weight: bold;
`;

const MessageContent = styled.p``;

import React from "react";
import "./Chat.css";
import styled from "styled-components";

const Chat = () => {
    return(
        <MainDiv>
            <Notice>
                <ul>
                    <li>Aperte enter para enviar uma mensagem.</li>
                    <li>Aperte ESC duas vezes para conversar com outra pessoa.</li>
                    <li>Vocês possuem interesse em...</li>
                </ul>
            </Notice>
            <ChatDiv>
                <ChatScreen>
                    <Message>
                        <div className="user-photo">
                            <ProfilePhoto src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F220453%2Fpexels-photo-220453.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&f=1&nofb=1" />
                        </div>
                        <div className="username-and-message-div">
                            <Me>Você</Me>
                            <MessageContent>Hi!</MessageContent>
                        </div>
                    </Message>
                    <Message>
                        <div className="user-photo">
                            <ProfilePhoto src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2017%2F09%2F01-shutterstock_476340928-Irina-Bg.jpg&f=1&nofb=1" />
                        </div>
                        <div className="username-and-message-div">
                            <StrangerUsername>Maria</StrangerUsername>
                            <MessageContent>This is actually so helpful for studying, because every time I am tempted to get distracted, I'm like IF SHE CAN DO IT, SO CAN I. This is a good idea, like it can help people feel more motivated to study if they have this in a background. It’s like a studying with a friend </MessageContent>
                        </div>
                    </Message>
                    <Message>
                        <div className="user-photo">
                            <ProfilePhoto src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2017%2F09%2F01-shutterstock_476340928-Irina-Bg.jpg&f=1&nofb=1" />
                        </div>
                        <div className="username-and-message-div">
                            <StrangerUsername>Maria</StrangerUsername>
                            <MessageContent>Don't you agree?</MessageContent>
                        </div>
                    </Message>
                    <Message>
                        <div className="user-photo">
                            <ProfilePhoto src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F220453%2Fpexels-photo-220453.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&f=1&nofb=1" />
                        </div>
                        <div className="username-and-message-div">
                            <Me>Você</Me>
                            <MessageContent>I'm not sure...</MessageContent>
                        </div>
                    </Message>
                </ChatScreen>
                <SubmitMessageForm>
                    <FindNewFriendButton>Novo amigo</FindNewFriendButton>
                    <MessageInput data-testid="message-input" />
                    <SubmitMessageButton type="submit" data-testid="submit-message-button">Enviar</SubmitMessageButton>
                </SubmitMessageForm>
            </ChatDiv>
        </MainDiv>
    )
}

export default Chat;

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
`
const ChatDiv = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ChatScreen = styled.div`
    width: 99%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 5px;
    padding: 10px;
    margin: 7px;
    background-color: #f1f1f1;
    border: 1px solid lightgrey;
`

const Notice = styled.div`
    display: flex;
    padding: 10px;
    background-color: #fff2e6;
    ul {
        padding-left: 15px;
    }
`

const Message = styled.div`
    display: flex;
    align-items: start;
    margin-bottom: 20px;
    min-width: 40px;
    font-family: 'Roboto', sans-serif;
`

const SubmitMessageForm = styled.form`
    display: flex;
    width: 99%;
    height: 70px;
    margin-bottom: 7px;
`

const FindNewFriendButton = styled.button`
    width: 10%;
    margin: 2px;
    cursor: pointer;
    background-color: #b30000;
    border: 1px solid #b30000;
    border-radius: 3px;
    color: white;
    font-weight: bolder;
    :hover {
        background-color: #cc0000;
        border: 1px solid #cc0000;
    }
`

const MessageInput = styled.textarea`
    width: 80%;
    border: 1px solid lightgrey;
    padding: 5px;
    outline: none;
    font-size: 15px;
    margin: 2px;
    font-family: 'Roboto', sans-serif;
`

const SubmitMessageButton = styled.button`
    width: 10%;
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
`

const Me = styled.span`
    font-weight: bold;
`

const StrangerUsername = styled.span`
    font-weight: bold;
`

const MessageContent = styled.p``

const ProfilePhoto = styled.img`
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: 100%;
`
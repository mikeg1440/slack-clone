import React from 'react';
import styled from 'styled-components';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import InfoIcon from '@material-ui/icons/Info';
import NewMessage from './NewMessage';
import ChatMessage from './ChatMessage';
import db from '../firebase';

export default function Chatroom() {
    const [ chatroom, setChatroom ] = useState();
    const getChatroom = () => {
        db.collection('rooms')
            .doc(roomId)
            .onSnapshot( snapshot => {
                setChatroom(snapshot.data())
            })
    }

    return (
        <ChatContainer>

            <ChatHeader>
                <HeaderContainer>
                    <HeaderTitle># Chat Room</HeaderTitle>
                    <ChatDetails>
                        <PersonOutlineIcon/>
                        21
                        <PersonPinCircleIcon/>
                        Track and coordinate social media
                    </ChatDetails>
                </HeaderContainer>
                <InfoIcon style={{float: 'right'}}/>
            </ChatHeader>


            <ChatRoom>
                <ChatMessage />
                <ChatMessage />
            </ChatRoom>

            <NewMessage/>
            
        </ChatContainer>
    )
}


const ChatContainer = styled.div`
    background-color: ${props => props.theme.chatBG};
    color: ${props => props.theme.chatFG};
    display: grid;
    grid-template-rows: 65px auto min-content;
`

const ChatHeader = styled.div`
    border-bottom: 1px solid #523753;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ChatDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;    
`

const HeaderTitle = styled.p`
    font-weight: bold;
`

const ChatRoom = styled.div`
    border-bottom: 1px solid #523753;
`

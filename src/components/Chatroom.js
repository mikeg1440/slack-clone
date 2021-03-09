import React from 'react';
import styled from 'styled-components';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import InfoIcon from '@material-ui/icons/Info';
import NewMessage from './NewMessage';
import ChatMessage from './ChatMessage';
import db from '../firebase';
import firebase from 'firebase';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Chatroom({ user }) {

    let { roomId } = useParams()
    const [ chatroom, setChatroom ] = useState();
    const [ messages, setMessages ] = useState([]);


    const getChatroom = () => {
        db.collection('rooms')
            .doc(roomId)
            .onSnapshot( snapshot => {
                setChatroom(snapshot.data())
            })
    }

    const getMessages = () => {
        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot( snapshot => {
                let chatMessages = snapshot.docs.map(doc => doc.data());
                console.info('messages', chatMessages);
                setMessages([...chatMessages]);
            })
    }

    const sendMessage = (message) => {
        if ( !!roomId && message.length > 0 ){
            const payload = {
                user: user.name,
                text: message,
                userImage: user.photo,
                timestamp: firebase.firestore.Timestamp.now()
            }

            console.table(payload);

            db.collection('rooms')
                .doc(roomId)
                .collection('messages')
                .add(payload);
        }
    }

    useEffect(() => {
        getChatroom();
        getMessages();
    }, [roomId])

    return (
        <ChatContainer>

            <ChatHeader>
                <HeaderContainer>
                    <HeaderTitle># { !!chatroom && chatroom.name }</HeaderTitle>
                    <ChatDetails>
                        <PersonOutlineIcon/>
                        21
                        {/* TODO Change out template data for dynamic chatroom details */}
                        <PersonPinCircleIcon/>
                        Track and coordinate social media
                    </ChatDetails>
                </HeaderContainer>
                <InfoIcon style={{float: 'right'}}/>
            </ChatHeader>


            <ChatRoom>
                { messages.length > 0 && messages.map( message => <ChatMessage message={ message } /> ) }
            </ChatRoom>

            <NewMessage sendMessage={sendMessage} />
            
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

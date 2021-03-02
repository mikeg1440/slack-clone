import React from 'react';
import styled from 'styled-components';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import InfoIcon from '@material-ui/icons/Info';
import { ReorderTwoTone } from '@material-ui/icons';
import NewMessage from './NewMessage'

export default function Chatroom() {
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
                <p style={{color: 'green', float: 'left'}}>John: Hey whats up guys</p>
                <p style={{color: 'blue', float: 'right'}}>Mark: Nothing much u</p>
            </ChatRoom>

            <NewMessage/>
            
        </ChatContainer>
    )
}


const ChatContainer = styled.div`
    background-color: ${props => props.theme.chatBG};
    color: ${props => props.theme.chatFG};
`

const ChatHeader = styled.div`
    border: 1px solid #523753;
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
    flex-direction: row;
    
`

const HeaderTitle = styled.p`
    font-size: 18pt;
    font-weight: bold;
`

const ChatRoom = styled.div`
    height: 75vh;
`

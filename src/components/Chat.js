import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import Chatroom from './Chatroom'
import Sidebar from './Sidebar'

export default function Chat({ rooms }) {

    const { roomId } = useParams();

    const handleSetRoom = () => {
        console.log(`Room ID: ${roomId}`)
        if (!!roomId){
            const room = rooms.filter(room => room.id === roomID);
            return <Chatroom room={room} />
        }else {
            return <Chatroom />
        }
    }

    return (
        <StyledChat>
            <Sidebar rooms={rooms} />
            
            {handleSetRoom()}
        </StyledChat>
    )
}

const StyledChat = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 0.4fr 1.6fr;
    gap: 0px 0px;
    grid-template-areas: ". .";
`

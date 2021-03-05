import React, { useState } from 'react'
import styled from 'styled-components'
import Chatroom from './Chatroom'
import Sidebar from './Sidebar'

export default function Chat({ rooms }) {

    const [ currentRoom, setCurrentRoom ] = useState(undefined);

    const handleSetRoom = () => {

    }

    return (
        <StyledChat>
            <Sidebar rooms={rooms} setRoomCallback={handleSetRoom} />
            
            <Chatroom room={currentRoom} />
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

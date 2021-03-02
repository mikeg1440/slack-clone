import React from 'react'
import styled from 'styled-components'
import Chatroom from './Chatroom'
import Sidebar from './Sidebar'

export default function Chat({ rooms }) {
    return (
        <StyledChat>
            <Sidebar rooms={rooms} />
            
            <Chatroom />
        </StyledChat>
    )
}

const StyledChat = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: grid;
    grid-template-columns: 0.4fr 1.6fr;
    gap: 0px 0px;
    grid-template-areas:
        ". .";
`

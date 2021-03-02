import React from 'react'
import styled from 'styled-components'

export default function ChatMessage({user, message}) {
    return (
        <MesageContainer>
            Hellow there
        </MesageContainer>
    )
}

const MesageContainer = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
`
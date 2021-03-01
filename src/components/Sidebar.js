import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default function Sidebar() {

    const handleNewMessage = () => {
        alert('working');
    }

    return (
        <StyledSidebar>
            <StyledWorkspace>
                Workspace inc.
                <StyledNewMessage href="#" onClick={handleNewMessage}>
                    <AddCircleOutlineIcon/>
                </StyledNewMessage>
            </StyledWorkspace>

            <StyledPages>
                <h4><b>All unreads</b></h4>
                <h4>Threads</h4>
                <h4>Mentions & reactions</h4>
                <h4>Show more</h4>
            </StyledPages>

            <StyledConversations>
                <h4>Channels</h4>

                <h4>Direct Messages</h4>
            </StyledConversations>

        </StyledSidebar>
    )
}

const StyledSidebar = styled.div`
    background-color: #3d0e3e;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 1rem;
`

const StyledWorkspace = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 1rem;
    width: 100%;
    border-bottom: 1px solid #523753;
`

const StyledNewMessage = styled.a`
    color: white;
    
`

const StyledPages = styled.div`
`

const StyledConversations = styled.div`

`
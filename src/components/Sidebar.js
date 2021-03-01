import React from 'react';
import styled from 'styled-components';
import {IoCreateOutline} from 'react-icons/io5'

export default function Sidebar() {
    return (
        <StyledSidebar>
            <StyledWorkspace>
                Workspace inc.
                <IoCreateOutline style={{color: 'white'}} />
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
    justify-content: space-between;
    padding: 1rem .5rem;
    width: 80%;
`

const StyledPages = styled.div`
`

const StyledConversations = styled.div`

`
import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItems} from '../data/SidebarData'

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

                {sidebarItems.map(page => 
                    <StyledPageItem>
                        {page.icon}
                        {page.text}        
                    </StyledPageItem>

                )}

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
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0;
    svg {
        padding-right: 1rem;
    }
    border-bottom: solid 1px #523753;
`

const StyledPageItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: .25rem;
`

const StyledConversations = styled.div`

`
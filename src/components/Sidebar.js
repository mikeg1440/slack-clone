import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItems, channelItems} from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';

export default function Sidebar() {

    const handleNewMessage = () => {
        alert('working');
    }

    const handleAddChannel = () => {
        alert('adding channel!');
    }

    return (
        <StyledSidebar>
            <StyledWorkspace>
                Workspace inc.
                <StyledNewMessage href="#" onClick={handleNewMessage}>
                    <AddCircleOutlineIcon/>
                </StyledNewMessage>
            </StyledWorkspace>

            <PagesContainer>
                <StyledPages>

                    {sidebarItems.map(page => 
                        <>
                            {page.icon}
                            {page.text}        
                        </>

                    )}

                </StyledPages>
            </PagesContainer>


            <ChannelContainer>

                <StyledChannels>
                    <ChannelHeader>
                        <b>Channels</b> 
                        <AddChannel>
                            <AddIcon onClick={handleAddChannel} fontSize='small' />
                        </AddChannel>
                    </ChannelHeader>
                    {channelItems.map(channel => (
                        <StyledChannel>
                            # {channel.text}
                        </StyledChannel>
                    ))}

                </StyledChannels>

            </ChannelContainer>

        </StyledSidebar>
    )
}

const StyledSidebar = styled.div`
    background-color: ${props => props.theme.sidebarBG};
    color: ${props => props.theme.sidebarFG};
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
    cursor: pointer;
`

const PagesContainer = styled.div`
    border-bottom: 1px solid #523753;
    width: 100%;
    display: flex;
    justify-content: center;
`

const StyledPages = styled.div`
    display: grid;
    grid-template-columns: 20% auto;
    padding: 1rem 0;
`

const ChannelContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #523753;
    display: flex;
    justify-content: center;
`

const ChannelHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
        cursor: pointer;
    }
`

const AddChannel = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        background-color: white;
        color: purple;
    }
`

const StyledChannels = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
`

const StyledChannel = styled.div`
    margin-bottom: .25rem;
    padding-left: .5rem;
    
`
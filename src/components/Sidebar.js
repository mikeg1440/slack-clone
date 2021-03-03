import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItems} from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import { useHistory } from 'react-router-dom';

export default function Sidebar({ rooms }) {
    const history = useHistory();

    const goToChannel = (id) => {
        if(id){
            console.info(`RoomID: ${id}`);
            history.push(`/room/${id}`);
        }
        
    }

    const handleNewMessage = () => {
        alert('working');
    }

    const handleAddChannel = () => {
        const newChannel = prompt('Enter channel name');

        db.collection('rooms').add({
            name: newChannel
        })
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
                <ChannelHeader>
                    <b>Channels</b> 
                    <AddChannel>
                        <AddIcon onClick={handleAddChannel} fontSize='small' />
                    </AddChannel>
                </ChannelHeader>

                <StyledChannels>
                    {!!rooms && rooms.map(room => (
                        <StyledChannel onClick={() => goToChannel(room.id)}>
                            # {room.name}
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
    flex-direction: column;
`

const ChannelHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
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
    align-items:
    width: fit-content;
    padding: 0 1rem;
    :hover {
        cursor: pointer;
    }
`

const StyledChannel = styled.div`
    margin-bottom: .25rem;
    padding-left: .5rem;
`
import React from 'react'
import styled from 'styled-components'

export default function ChatMessage({ message }) {
    return (
        <MesageContainer>
            <AvatarContainer>
                <UserAvatar src={  message.userImage } alt="User image"/> 
            </AvatarContainer>


            <MessageBody>
                <MessageHeader>
                    { message.user }
                    <TimeStamp>
                        { message.timestamp.toDate().toUTCString() }
                    </TimeStamp>
                </MessageHeader>

                <Message>
                    { message.text }
                </Message>

                { !!message && !!message.attachments ? message.attachments.map(attachment => <Attachments>{ attachment.name }</Attachments>) : null }

                <Responses>
                    
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/599324.svg" width='20px' alt=""/>
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/1478/1478192.svg" width='20px' alt=""/>
                    {/* TODO Implement the reaction icons and replace the dummy templates */}
                </Responses>
            </MessageBody>

        </MesageContainer>
    )
}

const MesageContainer = styled.div`
    padding: 1rem;
    display: flex;
    :hover {
        filter: brightness(85%); 
        background-color: #8080802e;
    }
`

const AvatarContainer = styled.div`
    padding: 0 .5rem;
`

const UserAvatar = styled.img`
    border-radius: 5px;
    size: 20px;
`

const MessageBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-center;

`

const MessageHeader = styled.div`
    font-weight: bold;
    display: flex;
    align-items: center;
`

const Message = styled.div`

`

const Attachments = styled.div`
    padding: .5rem; 
    border: 1px solid #523753;
`

const Responses = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    img {
        border-radius: 50%;
        background-color: #e4e4e4cc;
        padding: .25rem;
        margin-right: 5px;
    }
`

const TimeStamp = styled.div`
    font-size: smaller;
    font-weight: lighter;
    margin-left: 15px;
`
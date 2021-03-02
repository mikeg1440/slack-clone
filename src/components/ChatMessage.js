import React from 'react'
import styled from 'styled-components'

export default function ChatMessage({user, message}) {
    return (
        <MesageContainer>
            <AvatarContainer>
                <UserAvatar src="https://randomuser.me/api/portraits/women/27.jpg" alt="User avatar"/> 
            </AvatarContainer>


            <MessageBody>
                <MessageHeader>
                    Cindy Chan
                    <TimeStamp>
                        11:52 PM
                    </TimeStamp>
                </MessageHeader>

                <Message>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Message>

                {!!message && !!message.attachments ? message.attachments.map(attachment => <Attachments>{attachment.name}</Attachments>) : null}

                <Responses>
                    
                    <img src="https://www.flaticon.com/svg/vstatic/svg/599/599324.svg?token=exp=1614712812~hmac=5afd2992fe66f672ce25bb84d6b6b0c4" width='20px' alt=""/>
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/1478/1478192.svg" width='20px' alt=""/>
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
        background-color: lightgrey;
        padding: .25rem;
        margin-right: 5px;
    }
`

const TimeStamp = styled.div`
    font-size: small;
    font-weight: lighter;
    margin-left: 5px;
`
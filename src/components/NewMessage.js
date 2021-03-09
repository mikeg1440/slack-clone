import React, { useState } from 'react'
import styled from 'styled-components'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';

export default function NewMessage({ sendMessage }) {

    const [ messageText, setMessageText ] = useState('');

    return (
        <NewMessageContainer>
            <InnerMessageContainer>

                <InputContainer>
                    <MessageInput placeholder='Message #chat-room-name' type="text" value={messageText} onChange={ e => setMessageText(e.target.value) } />

                    <SendButton onClick={() => sendMessage(messageText) }>
                        <SendIcon/>
                    </SendButton>               
                </InputContainer>

                <TextOptionBar>
                    <FlashOnIcon/>
                    <FormatBoldIcon/>
                    <FormatItalicIcon/>
                    <StrikethroughSIcon/>
                    <CodeIcon/>
                    <LinkIcon/>
                    <FormatListNumberedIcon/>
                    <MoreHorizIcon/>
                    <FontDownloadIcon/>
                    <SentimentSatisfiedIcon/>
                    <AttachFileIcon/>
                </TextOptionBar>
                
            </InnerMessageContainer>

        </NewMessageContainer>
    )
}


const NewMessageContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
`

const InnerMessageContainer = styled.div`
    border: 1px solid #523753;
    border-radius: 5px;
    width: 70%;
`

const TextOptionBar = styled.div`
    border-top: 1px solid #523753;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .5rem 0;
    svg {
        cursor: pointer;
    }
`

const InputContainer = styled.form`
    padding: .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

const MessageInput = styled.input`
    flex: 1;
    border-radius: 5px;
    border: none;
    line-height: 2;
    padding: .25rem;
    :focus {
        outline: none;
    }
`

const SendButton = styled.div`
    color: #13d47c;
    background-color: darkgreen;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: .5rem;
    :hover {
        cursor: pointer;
    }
`
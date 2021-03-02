import React from 'react'
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

export default function NewMessage() {
    return (
        <NewMessageContainer>
            <InnerMessageContainer>
                <InputContainer>
                    <MessageInput placeholder='Message #chat-room-name' type="text"/>
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
    border: 1px solid black;
    border-radius: 5px;
    width: 70%;
`

const MessageInput = styled.input`
    width: 100%;
    border-radius: 5px;
    border: 0;
    line-height: 2;
    padding: .25rem;
`

const TextOptionBar = styled.div`
    width: 100%;
    border-top: 1px solid #523753;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .5rem 0;
    svg {
        cursor: pointer;
    }
`

const InputContainer = styled.div`
    padding: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
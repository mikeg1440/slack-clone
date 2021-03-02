import React from 'react'
import Header from '../components/Header';
import Chat from '../components/Chat';

export default function ChatPage(props) {
    return (
        <>
              <Header username='nick' themeCallback={props.themeCallback} />
              <Chat/>
        </>
    )
}

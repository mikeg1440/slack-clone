import React from 'react'
import Header from '../components/Header';
import Chat from '../components/Chat';

export default function ChatPage({ themeCallback, rooms}) {
    return (
        <>
              <Header username='nick' themeCallback={themeCallback} />
              <Chat rooms={rooms} />
        </>
    )
}

import React from 'react'
import Header from '../components/Header';
import Chat from '../components/Chat';

export default function ChatPage({ themeCallback, rooms, signOutCallback}) {
    return (
        <>
              <Header username='nick' themeCallback={themeCallback} signOutCallback={signOutCallback} />
              <Chat rooms={rooms} />
        </>
    )
}

// TODO Check for files that not being used after the refactor
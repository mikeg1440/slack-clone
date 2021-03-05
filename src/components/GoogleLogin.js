import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase'

export default function GoogleLogin({ setUserCallback }) {

    const handleSignIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                const newUser = {
                    name: result.user.displayName,
                    photo: result.user.photoUrl
                }
                setUserCallback(newUser);
            })
            .catch(err => alert(err))
    }

    return (
        <LoginContainer>
            <LoginPanel>
                <SlackLogo src='/slack-logo.png' alt='Slack logo' />

                <LoginText>
                    Sign in to Slack
                </LoginText>

                <LoginButton onClick={() => handleSignIn()}>
                    <GoogleLogo src="/google-logo.png" alt="Google Logo" />
                    Sign in with Google
                </LoginButton>

            </LoginPanel>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
`

const LoginPanel = styled.div`
    color: white;
    background-color: #000000ad;
    box-shadow: 0px 1px 7px 5px #232222;
    border-radius: 5px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 50%;
    width: 33%;
`

const SlackLogo = styled.img`
    width: 30%;
`

const GoogleLogo = styled.img`
    width: 20px;
    background-color: white;
    border-radius: 3px;
    margin-right: .5rem;
`

const LoginText = styled.div`
    font-size: 18pt;
    font-weight: bold;
`

const LoginButton = styled.button`
    background-color: #4082ed;
    color: white;
    font-size: small;
    font-weight: light;
    border: none;
    padding: .5rem;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
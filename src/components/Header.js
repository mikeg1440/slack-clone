import React from 'react';
import styled from 'styled-components';
import {BsArrowLeftShort} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BiHelpCircle} from 'react-icons/bi';
import {VscCircleFilled} from 'react-icons/vsc';

export default function Header({ username }) {

    return (
        <StyledHeader>
            <div>
                <VscCircleFilled style={{color: 'red'}} />
                <VscCircleFilled style={{color: 'yellow'}} />
                <VscCircleFilled style={{color: 'green'}} />
            </div>

            <StyledSearchbar>
                <BsArrowLeftShort />
                <BsArrowRightShort />
                <AiOutlineClockCircle />

                <StyledInput type='text' name='search' placeholder='Search' />
                <BiHelpCircle/>
            </StyledSearchbar>

            <StyledUserContainer>
                <b>{username}</b>
                <StyledImg src={`https://identicon.rmhdev.net/${username}.png`} alt="User Avatar" />
            </StyledUserContainer>
        </StyledHeader>
    )
}


const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    background-color: #2a0b2a;
    color: white;
    padding: .5rem .5rem;
`

const StyledSearchbar = styled.div`
    min-width: 400px;
    display: flex;
    align-items: center;
`

const StyledUserContainer = styled.div`
    float: right;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const StyledInput = styled.input`
    border-radius: 5px;
    text-align: center;
    margin: 0 1rem;
    border: 1px solid #ffffff85;
    background-color: #381637;
    color: white;
    max-width: 600px;
    min-width: 300px;
    line-height: 1.5;
`

const StyledImg = styled.img`
    width: 20px;
    border: 2px solid black;
`

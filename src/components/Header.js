import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import UpdateIcon from '@material-ui/icons/Update';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function Header({ username }) {

    return (
        <StyledHeader>
            <div>
                <FiberManualRecordIcon style={{color: 'red'}} size='small' />
                <FiberManualRecordIcon style={{color: 'yellow'}} size='small' />
                <FiberManualRecordIcon style={{color: 'green'}} size='small' />
            </div>

            <StyledSearchbar>
                <ArrowBackIcon />
                <ArrowForwardIcon/>
                <UpdateIcon/>

                <StyledInput type='text' name='search' placeholder='Search' />
                <HelpOutlineIcon/>
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

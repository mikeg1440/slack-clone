import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <StyledHeader>
            <input type='text' name='search' placeholder='Search' />
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    background-color: #2a0b2a;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5vh;
`

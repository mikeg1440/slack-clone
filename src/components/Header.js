import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <StyledHeader>
            <h1>Chat Page Header</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #2b092b;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

import React from 'react'
import styled from 'styled-components'

export default function Sidebar() {
    return (
        <StyledSidebar>
            <h4>Workspace Section</h4>

            <h4>Categories</h4>

            <h4>Channels</h4>

            <h4>Direct Messages</h4>
        </StyledSidebar>
    )
}

const StyledSidebar = styled.div`
    background-color: #3d0e3e;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

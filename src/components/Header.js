import React, { useRef } from 'react';
import styled from 'styled-components';
import {BsArrowLeftShort} from 'react-icons/bs';
import {BsArrowRightShort} from 'react-icons/bs';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BiHelpCircle} from 'react-icons/bi';

export default function Header() {

    const avatarImg = useRef();

    useEffect(() => {

        
    }, [username])

    return (
        <StyledHeader>
            <div>
                <AiOutlineClockCircle className='float-right' />
                <BsArrowRightShort className='float-right' />
                <BsArrowLeftShort className='float-right' />
            </div>

            <div>
                <StyledInput type='text' name='search' placeholder='Search' />
                <BiHelpCircle style={{float: 'right'}}/>
            </div>

            <div>
                <b>Username</b>
                <img src="" alt="User Avatar" ref={avatarImg} />
            </div>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    background-color: #2a0b2a;
    color: white;
    display: grid;
    grid-template-columns: 0.4fr 1.6fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: .5rem 1rem .5rem 0;
`

const StyledInput = styled.input`
    border-radius: 5px;
    text-align: center;
    margin-left: 1rem;
    border: 1px solid #ffffff85;
    background-color: #381637;
    width: 60%;
    color: white;
`

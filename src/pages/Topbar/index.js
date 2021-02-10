import React from 'react';
import styled from 'styled-components';
import { RiMenuFill } from 'react-icons/ri';
import { IoIosSearch } from 'react-icons/io';

const Topbar = () => {
    return (
        <MainWrapper>
            <RiMenuFill size={24}/>
            <BookInput />
            <IoIosSearch size={24}/>
        </MainWrapper>
    );
};

const MainWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
`;

const BookInput = styled.input`
    width: 150px;
    border: none;
    background: none;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    font-size: 22px;
    -webkit-background-clip: padding-box; /* for Safari */
    background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
`;

export default Topbar;
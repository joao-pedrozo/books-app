import React from 'react';
import styled from 'styled-components';

import Topbar from '../Topbar';

const BookList = () => {
    return (
        <MainWrapper>
            <Topbar/>
            <p> teste </p>
        </MainWrapper>
    )
};

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #f1c40f;
    padding: 15px;
`;

export default BookList;
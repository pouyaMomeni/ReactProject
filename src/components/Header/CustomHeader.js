import React from 'react';
import Hero from '../Hero';
import NavBar from './navBar';
import { useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';

const CustomHeader = () => {
    const location = useLocation()
    return (
            <Box  sx={{display: location.pathname === '/start' ? '':'none'}} >
                <NavBar/>

            </Box>
    );
};

export default CustomHeader;

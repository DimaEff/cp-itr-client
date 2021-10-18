import React from 'react';
import {Typography} from "@mui/material";


const Text = ({text}) => {
    return (
        <Typography variant={'body1'} overflow={'auto'} maxHeight={'200px'}>
            {text}
        </Typography>
    );
};

export default Text;

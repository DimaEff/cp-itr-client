import React from 'react';
import {Box} from "@mui/material";


const wrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
    height: '100%',
    width: '100%',
    borderRadius: '10px',
};

const img = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',

    borderRadius: 'inherit',
}

const ImageContainer = ({url}) => {
    return (
        <Box sx={wrapper}>
            <img src={url} style={img}/>
        </Box>
    );
};

export default ImageContainer;

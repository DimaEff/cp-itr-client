import React from 'react';
import {CardMedia} from "@mui/material";


const Media = ({task}) => {
    return (
        <CardMedia
            component="img"
            height="160"
            image={task.images.map(i => i.image_url)[0]}
        />
    );
};

export default Media;

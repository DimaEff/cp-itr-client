import React from 'react';
import {Button} from "@mui/material";


const Theme = ({label, onClick, active}) => {
    const handleClick = () => {
        onClick(label);
    }

    return (
        <div>
            <Button variant={active ? 'contained': 'outlined'} onClick={handleClick}>
                {label}
            </Button>
        </div>
    );
};

export default Theme;

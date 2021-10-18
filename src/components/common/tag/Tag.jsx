import React from 'react';
import {Chip} from "@mui/material";
import randomcolor from "randomcolor";


const Tag = ({label, onClick, onDelete, active}) => {
    const handleClick = () => {
        onClick(label);
    }

    const handleDelete = () => {
        onDelete(label);
    }

    return (
        <Chip label={label}
              onClick={onClick && handleClick}
              onDelete={onDelete && handleDelete}
              variant={'outlined'}
              sx={{backgroundColor: active ? 'gold': randomcolor()}}
        />
    );
};

export default Tag;

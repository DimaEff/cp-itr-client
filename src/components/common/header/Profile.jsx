import React from 'react';
import {observer} from "mobx-react-lite";
import {Box, IconButton, Typography} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import {auth} from '../../../store';


const Profile = observer(() => {
    return (
        <Box display={'flex'}>
            <Typography variant={'h6'}>
                {auth.profile.user_name || 'name'}
            </Typography>
            <IconButton onClick={auth.signOut}>
                <ExitToAppIcon />
            </IconButton>
        </Box>
    );
});

export default Profile;

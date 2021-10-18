import React from 'react';
import {observer} from "mobx-react-lite";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {auth} from '../../../store';
import LoginMenu from "./LoginMenu";
import ChangeLanguage from "./ChangeLanguage";
import Profile from './Profile';


const Header = observer(() => {
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                            cp-itr
                        </Typography>
                        <Box marginRight={'20px'}>
                            {
                                auth.isAuth ?
                                    <Profile/> :
                                    <LoginMenu/>
                            }
                        </Box>
                        <ChangeLanguage/>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
});

export default Header;

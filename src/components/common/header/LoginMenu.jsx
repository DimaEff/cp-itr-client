import React from 'react';
import {Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

import '../../../utils/i18next';
import GoogleLoginButton from "./GoogleLoginButton";
import VkLoginButton from "./VkLoginButton";


const LoginMenu = () => {
    const {t} = useTranslation();

    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant={'h6'}>
                {t('header.loginTitle')}:
            </Typography>
            <GoogleLoginButton />
            <VkLoginButton />
        </Box>
    );
};

export default LoginMenu;

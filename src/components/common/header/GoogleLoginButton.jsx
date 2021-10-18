import React from 'react';
import {IconButton} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import {useGoogleLogin} from "react-google-login";
import {observer} from "mobx-react-lite";

import {REACT_APP_GOOGLE_AUTH_CLIENT_ID} from "../../../api/authConfig";
import {useGoogleAuthentication} from "../../../api/authHooks";
import {auth, fetching} from '../../../store';


const GoogleLoginButton = observer(() => {
    const {handleGoogleSuccess} = useGoogleAuthentication();
    const handleGoogle = async (response) => {
        const token = await handleGoogleSuccess(response);
        await auth.login(token);
    }

    const {signIn} = useGoogleLogin({
        clientId: REACT_APP_GOOGLE_AUTH_CLIENT_ID,
        onSuccess: fetching.fetchingWrapper(handleGoogle),
    });

    return (
        <div>
            <IconButton onClick={signIn}>
                <GoogleIcon/>
            </IconButton>
        </div>
    );
});

export default GoogleLoginButton;

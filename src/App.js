import React, {useEffect, useState} from 'react';
import GoogleLogin from "react-google-login";

import authStore from './store/auth';
import {auth, tags} from './api';
import {useGoogleAuthentication} from './api/authHooks';
import {REACT_APP_GOOGLE_AUTH_CLIENT_ID} from "./api/authConfig";
import {observer} from "mobx-react-lite";


const App = observer(() => {
    const [responseTags, setResponseTags] = useState([]);
    const [responseUsers, setResponseUsers] = useState([]);
    const [profile, setProfile] = useState({});

    const getProfile = async () => {
        const p = await auth.getProfile();
        console.log(p);
        setProfile(p);
    }

    const {handleGoogleSuccess} = useGoogleAuthentication();
    const handleGoogle = async (response) => {
        const token = await handleGoogleSuccess(response);
        authStore.setToken(token);
    }

    const getTags = async () => {
        const a = await tags.getTags();
        console.log(a);
    }

    return (
        <div>
            <GoogleLogin
                clientId={REACT_APP_GOOGLE_AUTH_CLIENT_ID}
                buttonText={'Log In'}
                onSuccess={handleGoogle}
            />

            <div>
                <button onClick={getProfile}>profile</button>
            </div>

            <div>
                <button onClick={getTags}>tags</button>
            </div>

            <div>
                <button onClick={() => localStorage.removeItem('token')}>remove token</button>
            </div>
        </div>
    );
})

export default App;
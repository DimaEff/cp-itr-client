import React, {useState, useEffect} from 'react';
import {IconButton} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useHistory, useLocation} from "react-router-dom";

import {REACT_APP_VK_AUTH_CLIENT_ID, VK_REDIRECT_URI} from "../../../api/authConfig";
import vkIcon from '../../../assets/vkIcon.svg';
import {auth, fetching} from '../../../store';
import {useVkAuthentication} from '../../../api/authHooks';
import queryString from "query-string";


const VkLoginButton = observer(() => {
    const [token, setToken] = useState('');
    const history = useHistory();
    const {handleVkSuccess} = useVkAuthentication();
    const {search} = useLocation();

    const handleRedirect = async () => {
        window.location.href = `https://oauth.vk.com/authorize?client_id=${REACT_APP_VK_AUTH_CLIENT_ID}&display=page&redirect_uri=${VK_REDIRECT_URI}&scope=email&response_type=code&v=5.120&state=4194308`;

    };

    useEffect(() => {
        const fetch = async () => {
            const queryObj = await queryString.parse(search);
            if (queryObj.code) {
                setToken(queryObj.code)
            }
        }

        fetch();
    }, [search]);

    useEffect(() => {
        const fetch = async () => {
            if (token) {
                const data = await handleVkSuccess(token);
                await auth.login(data.accessToken);
                history.push('/');
            }
        }

        fetching.fetchingWrapper(fetch)();
    }, [token]);

    return (
        <div>
            <IconButton onClick={handleRedirect}>
                <img src={vkIcon}/>
            </IconButton>
        </div>
    );
});

export default VkLoginButton;

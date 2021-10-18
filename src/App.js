import React, {Suspense, useEffect} from 'react';
import {observer} from "mobx-react-lite";

import {auth, fetching} from './store';
import {Header} from "./components/common/header";
import {Tasks} from "./components/tasks";
import {Container} from "@mui/material";
import Loader from "./components/common/loader/Loader.jsx";


const App = observer(() => {
    useEffect(async () => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (token) {
            await fetching.fetchingWrapper(() => auth.login(token))();
        }
    }, []);

    return (
        <div>
            <Suspense fallback={'...'}>
                <Loader />
                <Header/>
                <Container maxWidth={'lg'}>
                    <Tasks />
                </Container>
            </Suspense>
        </div>
    );
})

export default App;
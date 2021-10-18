import React from 'react';
import {observer} from "mobx-react-lite";
import {Modal} from "@mui/material";

import {fetching} from '../../../store';
import loaderSvg from '../../../assets/loader.svg';


const loader = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const Loader = observer(() => {
    return (
        <Modal open={fetching.isFetching} sx={loader}>
            <img src={loaderSvg}/>
        </Modal>
    );
});

export default Loader;

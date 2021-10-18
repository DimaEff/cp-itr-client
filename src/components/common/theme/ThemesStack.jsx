import React from 'react';

import Theme from "./Theme";
import {Box} from "@mui/material";
import {observer} from "mobx-react-lite";
import {getRefactorElements} from "../../../utils/helper";


const wrapper = {
    display: 'flex',
    overflowX: 'auto',

    '>div': {
        margin: '0px 10px',
    }
}

const ThemesStack = observer(({themes, onClick, selectedTheme}) => {
    const refactorThemes = getRefactorElements(themes);

    return (
        <Box sx={wrapper}>
            {refactorThemes
                .map(t => <Theme key={t?.label}
                                 active={t?.label === selectedTheme}
                                 onClick={onClick}
                                 {...t}
                />)
            }
        </Box>
    );
});

export default ThemesStack;

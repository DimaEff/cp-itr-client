import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Box} from "@mui/material";

import {themes} from '../../../store';
import {ThemesStack} from "../../common/theme";


const ThemesBar = observer(({setTheme, selectedTheme}) => {
    useEffect(async () => {
        await themes.fetchThemes();
    }, []);

    const ts = themes.themes;

    const handleToggleTheme = (label) => {
        if (selectedTheme.includes(label)) {
            setTheme('')
        } else {
            setTheme(label)
        }
    }

    return (
        <Box margin={'20px 30px'}>
            <ThemesStack themes={ts} onClick={handleToggleTheme} selectedTheme={selectedTheme}/>
        </Box>
    );
});

export default ThemesBar;

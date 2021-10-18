import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";

import '../../../utils/i18next';
import TagsBar from "./TagsBar";
import ThemesBar from "./ThemesBar";
import {tasks} from '../../../store';


const TaskFilter = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedTheme, setSelectedTheme] = useState('');

    useEffect(async () => {
        await tasks.fetchTasks(null, null, selectedTheme, null, selectedTags);
    }, [selectedTags, selectedTheme]);

    return (
        <Box>
            <TagsBar setTags={setSelectedTags} selectedTags={selectedTags}/>
            <ThemesBar setTheme={setSelectedTheme} selectedTheme={selectedTheme}/>
        </Box>
    );
};

export default TaskFilter;
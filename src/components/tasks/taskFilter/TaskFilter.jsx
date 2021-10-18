import React, {useState} from 'react';
import {Button, Box} from "@mui/material";
import {useTranslation} from 'react-i18next';

import '../../../utils/i18next';
import TagsBar from "./TagsBar";
import ThemesBar from "./ThemesBar";
import {fetching, tasks} from '../../../store';


const TaskFilter = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedTheme, setSelectedTheme] = useState('');

    const {t} = useTranslation();

    const handleFilterTasks = async () => {
        await tasks.fetchTasks(null, null, selectedTheme, null, selectedTags);
    }

    return (
        <Box>
            <TagsBar setTags={setSelectedTags} selectedTags={selectedTags}/>
            <ThemesBar setTheme={setSelectedTheme} selectedTheme={selectedTheme}/>
            <Button sx={{margin: '10px 30px'}} variant={'contained'} onClick={fetching.fetchingWrapper(handleFilterTasks())}>
                {t('tasks.filter')}
            </Button>
        </Box>
    );
};

export default TaskFilter;

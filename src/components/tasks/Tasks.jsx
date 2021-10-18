import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Grid} from "@mui/material";

import {tasks} from '../../store';
import TaskCard from "./taskCard/TaskCard";


const Tasks = observer(() => {
    useEffect(async () => {
        await tasks.fetchTasks();
    }, [])

    return (
        <Container maxWidth={'lg'}>
            <Grid container spacing={2}>
                {tasks.tasks.map(t => <Grid key={t.id} item xs={12} sm={6} md={4} lg={4}>
                        <TaskCard key={t.id} task={t}/>
                    </Grid>
                )}
            </Grid>
        </Container>
    );
});

export default Tasks;

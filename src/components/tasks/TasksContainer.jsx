import React from 'react';
import {observer} from "mobx-react-lite";

import TaskModal from "./taskModal/TaskModal";
import Tasks from "./Tasks";
import TaskFilter from "./taskFilter/TaskFilter";


const TasksContainer = observer(() => {
    return (
        <>
            <TaskFilter />
            <TaskModal />
            <Tasks />
        </>
    );
});

export default TasksContainer;

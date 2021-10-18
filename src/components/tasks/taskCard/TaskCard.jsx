import React from 'react';
import {Card} from "@mui/material";

import Media from "./Media";
import Content from "./Content";
import Actions from "./Actions";


const TaskCard = ({task}) => {
    return (
        <div>
            <Card elevation={4} sx={{maxWidth: 345}}>
                <Media task={task}/>
                <Content task={task}/>
                <Actions task={task}/>
            </Card>
        </div>
    );
};

export default TaskCard;

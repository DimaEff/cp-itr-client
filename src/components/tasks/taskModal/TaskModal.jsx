import React from 'react';
import {Box, Modal, Paper, Typography} from "@mui/material";
import {observer} from "mobx-react-lite";

import {taskModal} from '../../../store';
import ImagesCarousel from "./ImagesCarousel";
import Text from "./Text";
import {TagsStack} from "../../common/tag";
import CheckSolution from "./CheckSolution.jsx";


const paperStyle = {
    maxWidth: '80%',
    width: '600px',
    maxHeight: '90vh',
    padding: '15px 20px',

    '>div': {
        margin: '10px 0px',
    }
};

const wrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const TaskModal = observer(() => {
    return (
        <Modal
            open={taskModal.isOpen}
            onClose={taskModal.close}
            sx={wrapper}
        >
            <Paper elevation={4} sx={paperStyle}>
                <Box display={'flex'} flexDirection={'column'} sx={{'>div': {margin: '15px 0px'}}}>
                    <Typography variant={'h4'}>
                        {taskModal.task.title}
                    </Typography>
                    <ImagesCarousel task={taskModal.task}/>
                    <Text text={taskModal.task.text}/>
                    <TagsStack tags={taskModal.task.tags}/>
                    <CheckSolution />
                </Box>
            </Paper>
        </Modal>
    );
});

export default TaskModal;

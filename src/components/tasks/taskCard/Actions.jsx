import React from 'react';
import {Box, Button, CardActions} from "@mui/material";
import {useTranslation} from 'react-i18next';
import {observer} from "mobx-react-lite";

import '../../../utils/i18next';
import {taskModal} from '../../../store';


const Actions = observer(({task}) => {
    const {t} = useTranslation();

    return (
        <div>
            <CardActions>
                <Box display={'flex'} justifyContent={'flex-end'} width={'100%'}>
                    <Button size={"small"} onClick={() => taskModal.open(task)}>
                        {t('tasks.card.open')}
                    </Button>
                </Box>
            </CardActions>
        </div>
    );
});

export default Actions;

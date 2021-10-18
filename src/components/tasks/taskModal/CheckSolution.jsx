import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Button, TextField, Box} from "@mui/material";
import {useTranslation} from 'react-i18next';
import {observer} from "mobx-react-lite";

import '../../../utils/i18next';
import {tasks, taskModal, auth, fetching} from '../../../store';


const CheckSolution = observer(() => {
    const {t} = useTranslation();
    const schema = yup.object().shape({
        solution: yup.string().required(t('tasks.modal.errorRequire')),
    });

    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    })

    const checkSolution = async ({solution}) => {
        const res = await tasks.checkSolution(solution, taskModal.task.id, auth.profile.id);
        console.log(res);
        reset(res);
    }

    return (
        <Box whiteSpace={1}>
            <form onSubmit={handleSubmit(checkSolution)}>
                <TextField error={!!errors.solution}
                           helperText={errors.solution?.message}
                           label={t('tasks.modal.solutionLabel')}
                           variant={'outlined'}
                           {...register('solution')}
                />
                <div>
                    <Button variant={'contained'} type={'submit'}>
                        {t('tasks.modal.checkSolution')}
                    </Button>
                </div>
            </form>
        </Box>
    );
});

export default CheckSolution;
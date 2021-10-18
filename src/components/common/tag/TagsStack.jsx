import React from 'react';
import {Stack} from "@mui/material";

import Tag from './Tag';
import {getRefactorElements} from "../../../utils/helper";


const TagsStacks = ({tags, onClick, onDelete, selectedTags}) => {
    const refactorTags = getRefactorElements(tags);

    return (
        <Stack spacing={1} direction={'row'} margin={'20px 30px'} sx={{overflowX: 'auto'}}>
            {refactorTags
                .map(tag => <Tag key={tag.label}
                                 active={selectedTags?.includes(tag?.label)}
                                 onClick={onClick}
                                 onDelete={onDelete}
                                 {...tag}
                />)
            }
        </Stack>
    );
};

export default TagsStacks;

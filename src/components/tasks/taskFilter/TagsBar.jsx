import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";

import {tags} from "../../../store";
import {TagsStack} from "../../common/tag";


const TagsBar = observer(({setTags, selectedTags}) => {
    useEffect(async () => {
        await tags.fetchTags();
    }, [])

    const handleClick = (label) => {
        setTags(tags => {
            if (tags.includes(label)) return tags;

            return [...tags, label]
        });
    }

    const handleDelete = (label) => {
        setTags(tags => tags.filter(t => t !== label));
    }

    const ts = tags.tags;

    return (
        <div>
            {tags.tags && <TagsStack tags={ts}
                                     selectedTags={selectedTags}
                                     onClick={handleClick}
                                     onDelete={handleDelete}
            />}
        </div>
    );
});

export default TagsBar;

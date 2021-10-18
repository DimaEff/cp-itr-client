import React from 'react';
import Typography from "@mui/material/Typography";
import {CardContent} from "@mui/material";


const Content = ({task}) => {
    return (
        <div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {task.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {
                        task.text.length > 200 ?
                            task.text.slice(200) + '...' :
                            task.text
                    }
                </Typography>
            </CardContent>
        </div>
    );
};

export default Content;

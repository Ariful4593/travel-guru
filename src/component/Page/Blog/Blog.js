import React from 'react';
import Header from '../../Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));
const Blog = () => {
    const classes = useStyles();

    return (
        <div>
            <Header></Header>
            <div className={`${classes.root} mt-5`} >
                <CircularProgress color="secondary" />
                <h1>In Progress...</h1>
            </div>
        </div>
    );
};

export default Blog;
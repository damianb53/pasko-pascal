import React from 'react';
import {
    AppBar as MaterialAppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import { toggleDrawer } from '../../actions/ui';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            position: 'absolute',
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1,
            fontWeight: 'normal'
        }
    })
);

interface Props {
    title: string;
}

export const AppBar: React.FC<Props> = ({ title }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <MaterialAppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={e => {
                        dispatch(toggleDrawer());
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {title}
                </Typography>
            </Toolbar>
        </MaterialAppBar>
    );
};

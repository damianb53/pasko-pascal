import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Button
} from '@material-ui/core';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { incrementBy } from '../../actions/test';

const StoreView: React.FC = props => {
    const store = useStore();
    const dispatch = useDispatch();

    const { count, msg } = useSelector((state: any) => state.test);

    console.log(store.getState());
    const increment = () => {
        dispatch(incrementBy(1));
        console.log(store.getState());
    };

    return (
        <Card>
            <CardHeader
                title={
                    <Typography variant="h3" color="error">
                        Store Debugger
                    </Typography>
                }
            />

            <CardContent>
                <Typography>Msg: {msg}</Typography>
                <Typography>Counter: {count}</Typography>
                <Button onClick={increment} color="primary" variant="outlined">
                    Add
                </Button>
            </CardContent>
        </Card>
    );
};

export default StoreView;

import { LOAD_TOPICS } from '../actions/types';

const initState = {};

const topicsReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case LOAD_TOPICS:
            return { ...state };
        default:
            return state;
    }
};

export default topicsReducer;

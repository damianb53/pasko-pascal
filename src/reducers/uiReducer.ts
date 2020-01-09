import { Action } from 'redux';
import { TOGGLE_DRAWER } from '../actions/types';

const initState = { isDrawerOpen: false };

const uiReducer = (state: any = initState, action: Action) => {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return { ...state, isDrawerOpen: !state.isDrawerOpen };
        default:
            return state;
    }
};

export default uiReducer;

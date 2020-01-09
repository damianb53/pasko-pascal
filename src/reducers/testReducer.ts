// import { Action } from 'redux';

interface IAction {
    payload: {
        amount: number;
    };
}

interface IState {
    counter: number;
}

const testReducer = (
    state: any = { msg: 'hello redux!', count: 0 },
    action: any
) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + action.payload.amount };
        default:
            return state;
    }
};

export default testReducer;

import API from '../api';
import store from '../store';
import { LOAD_TOPICS } from './types';

export const loadTopics = (topics: any) => ({ type: LOAD_TOPICS, topics });

export const asyncLoadTopics = () =>
    API.get('/content')
        .then(res => res.data)
        .then(topics => {
            store.dispatch(loadTopics(topics));
        });

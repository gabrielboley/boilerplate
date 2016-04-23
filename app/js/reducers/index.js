import { combineReducers } from 'redux';
import data from '../../fakeData';

function userData(state = data.userData, action) {
    return state
}

function listData(state = data.listData, action) {
    return state
}

function commentData(state = data.commentData, action) {
    return state
}

const rootReducer = combineReducers({
    userData,
    listData,
    commentData
});

export default rootReducer;
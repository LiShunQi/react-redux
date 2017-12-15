/**
 * Created by lsq on 2017/12/12.
 */
// const initialState = {}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)
const initialState = {
    list: [{item: 'test', done: false}], // just added this to test that state is being passed down propperly,
    newToDo: ''
};

const INPUT_CHANGED = 'INPUT_CHANGED';
const ADD_LISTITEM = 'ADD_LISTITEM';
const DELETE_LISTITEM = 'DELETE_LISTITEM';

export function inputChange(newToDo){
    return {
        type: INPUT_CHANGED,
        newToDo
    }
}
export function inputSubmit(){
    return {
        type: ADD_LISTITEM,
    }
}
export function deleteItem(index) {
    return {
        type:DELETE_LISTITEM,
        index
    }
}

export default function reducer(state = initialState, action){ // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
    switch (action.type){
        case INPUT_CHANGED:
            return Object.assign(
                {},
                state,
                {newToDo: action.newToDo}
            );
        case ADD_LISTITEM:
            return Object.assign(
                {},
                state,
                {
                    list: [...state.list, {item: state.newToDo, done: false }],
                    newToDo: ''
                }
            );
        case DELETE_LISTITEM:
            return Object.assign(
                {},
                state,
                {
                    list: [
                        ...state.list.slice(0, action.index),
                        ...state.list.slice(action.index+1)
                    ]
                }
            );
        default:
            return state;
    }
}

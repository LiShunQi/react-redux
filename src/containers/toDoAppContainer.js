/**
 * Created by lsq on 2017/12/12.
 */
import { connect } from 'react-redux';
import ToDoApp from '../compoents/ToDoApp';

import {
    inputChange,
    inputSubmit,
    deleteItem
} from '../redux/modules/toDoApp'; // we added this

function mapStateToProps(state) {
    return {
        toDoApp: state.toDoApp // gives our component access to state through props.toDoApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inputChange: (value) => dispatch(inputChange(value)), // we added this,
        inputSubmit: () => dispatch(inputSubmit()),
        deleteItem: (index) => dispatch(deleteItem(index))
    }; // here we'll soon be mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoApp);


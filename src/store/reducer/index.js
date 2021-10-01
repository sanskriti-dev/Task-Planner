import * as actionTypes from '../actions/actionTypes'
import * as properties from '../../mock/index'
import { getBoardsFromLS } from '../../utils'


const initialState = {
    tasks: [],
    editTaskDetails: null,
    isEditTask: false,
    editTaskId: null,
    boards: getBoardsFromLS() ? getBoardsFromLS() : properties.boards
}

const reducer = (state = initialState, payload) => {
    switch (payload.type) {

        case actionTypes.UPDATE_BOARD: {

            return {
                ...state,
                tasks: payload.payload.tasks,
                boards: payload.payload.boards,
                isEditTask: false,
                editTaskDetails: null,
                editTaskId: null
            }
        }

        case actionTypes.EDIT_TASK: {
            return {
                ...state,
                isEditTask: true,
                editTaskDetails: payload.payload.task,
                editTaskId: payload.payload.task.id
            }
        }
        case actionTypes.CANCEL_TASK: {
            return {
                ...state,
                isEditTask: false,
                editTaskDetails: null,
                editTaskId: null
            }
        }


        case actionTypes.REORDER_BOARD: {
            return {
                ...state,
                boards: payload.payload
            }
        }

        default: return {
            ...state
        }
    }

}

export default reducer;

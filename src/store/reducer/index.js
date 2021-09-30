import * as actionTypes from '../actions/actionTypes'
import * as properties from '../../mock/index'

const initialState = { 
    tasks:[],
    boards : properties.boards
}

const reducer = (state =initialState,payload) => {
    switch (payload.type) {
        
        case actionTypes.UPDATE_BOARD: {
            let newTasks = [...state.tasks]
            let newTaskLength = newTasks.length;
            payload.payload.id = "task " + newTaskLength
            let newboards = state.boards.map(ele => {
                if(ele.key === payload.payload.status)
                ele.list.push(payload.payload)
                return ele
            })
            console.log(payload.payload)
            newTasks.push(payload.payload)
            return {  
                ...state,
                tasks : newTasks,
                boards :newboards
             }
            }
            
        
         case actionTypes.REORDER_BOARD : {
          let task ;
         state.boards.map(ele => {
              if(ele.key === payload.payload.source.droppableId){
                 task = ele.list.find(item => item.id === payload.payload.draggableId)
                 let taskIndex = ele.list.findIndex(item => item.id === payload.payload.draggableId)
                 ele.list.splice(taskIndex,1)
              }
          })
        let newboards =  state.boards.map(ele => {
            if(ele.key === payload.payload.destination.droppableId){
                ele.list.splice(payload.payload.destination.index, 0, task);
            }
            return ele
        })
          return {
              ...state , 
               boards : newboards
          }
        }
        
         default : return {
             ...state
         }   
    }

}

export default reducer;

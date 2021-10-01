import * as actionTypes from '../actions/actionTypes'

const initialState = { 
    tasks:[],
    boards : [
        {
        title : 'Backlog',
        key: 'backlog',
        list : []
    },
    {
        title : 'In Progress',
        key : 'inProgress',
        list : []
    },
    {
        title : 'Review',
        key : 'review',
        list : []
    },
    {
        title : 'Complete',
        key : 'complete',
        list : []
    }
    ]
}

const reducer = (state =initialState,payload) => {
    switch (payload.type) {
        
        case actionTypes.UPDATE_BOARD: {
            console.log(payload)
        
            return {  
                tasks : payload.payload.tasks,
                boards : payload.payload.boards
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

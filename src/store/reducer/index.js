import * as actionTypes from '../actions/actionTypes'
import * as properties from '../../mock/index'

const initialState = { 
    boards: properties.boards,
}

const reducer = (state =initialState,payload) => {
    switch (payload.type) {
        
        case actionTypes.UPDATE_BOARD: 
            let newBoard = state.boards.map(ele => {
               if(ele.key === payload.payload.status)
                ele.list.push(payload.payload)
                return ele
            })
            return {  
                ...state,
                boards : newBoard,
             }
            
        
         case actionTypes.AUTH_LOGOUT : 
          return {
              ...state , 
              token : null,
              name :null,
              isloggedIn: false,
              email:null
          }
        
         default : return {
             ...state
         }   
    }

}

export default reducer;

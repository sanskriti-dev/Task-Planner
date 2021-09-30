import * as actionTypes from '../actions/actionTypes'

if(localStorage.getItem("user")){
var  user = JSON.parse(localStorage.getItem('user'))
var {token,name,email} = user
}
const initialState = {
    token : token ? token : null,
    name : name ? name: null ,
    email : email ? email : null,
    isloggedIn :email ? true : false
}

const reducer = (state =initialState,payload) => {
    switch (payload.type) {
        
        case actionTypes.AUTH_SUCCESS :
            return {
                ...state,
                token : payload.payload.token,
                email : payload.payload.email,
                name : payload.payload.name,
                isloggedIn:true
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

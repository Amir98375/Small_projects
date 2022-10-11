import* as types from './ActionType'
const initialState={
    count:0
}
export const  counterReducer=(state=initialState,action)=>{
      switch(action.type){
           case types.Increament:
            return{
                ...state,
                count:state.count+1
            }
            case types.Decreament:
               if(state.count>0){
                return{
                   ...state,
                   count:state.count-1 
                }
               }
                case types.Reset:
                    return{
                        ...state,
                        count:0
                    }
                default :
               return state
      }
}
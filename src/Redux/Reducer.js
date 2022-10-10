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
                return{
                    ...state,
                    count:state.count-1
                }
                default :
               return state
      }
}
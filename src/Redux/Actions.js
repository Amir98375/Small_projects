import*as types from './ActionType'
export const IncreaseValue=()=>{
    return{
        type:types.Increament
    }
}

export const DecreaseValue=()=>{
    return{
        
            type:types.Decreament
        
    }
}

export const Resetvalue=()=>{
    return{
        type:types.Reset
    }
}
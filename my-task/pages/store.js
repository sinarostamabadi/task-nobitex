import { configureStore } from '@reduxjs/toolkit'

let initialState={
    marketType:"tooman"
}

function reducer(state=initialState , action) {
    switch (action.type) {
        case "CHANGE-TO-TOOMAN":
        
        return {
            marketType:"tooman"
        }
    
            
        case "CHANGE-TO-USDT":

        return {
            marketType:"usdt"
        }

        default:state;
    }
}


export let store=configureStore({
    reducer
})
import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';
import { type } from "@testing-library/user-event/dist/type";
const initialState = {
    transactions: [
        {id: 1, text:'flower', amount: -20},
        {id: 2, text:'flower', amount: 300},
        {id: 3, text:'flower', amount: -10},
        {id: 4, text:'flower', amount: -150}
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
 export const GlobalProvider = ( children ) => {
      const [state, dispatch] = useReducer(AppReducer, initialState);


      //Actions 
      function deleteTransaction(id){
        dispatch({
          type: 'DElETE_TRANSACTION',
          payload: id
        })
      }
      return( <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
      }}>
        {children}
        </GlobalContext.Provider>
      );
}

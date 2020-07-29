import React, { createContext, useReducer } from 'react';
import { CovidReducer } from './reducers/CovidReducer';

export const contextData = createContext();

export default function ContextProvider({children}) {
    const [state, dispatch] = useReducer(CovidReducer, []);

// Get Data from Api by Action
    async function getData() {
        const response = await fetch("https://api.thevirustracker.com/free-api?countryTotal=US");
        let result = await response.json();
        
        dispatch({
            type: 'GET_COVID_DATA',
            payload: result,
        })
    }
// End

    return (
        <contextData.Provider value={{
            data : state,
            getData,
        }}>
            {children}
        </contextData.Provider>
    )
}

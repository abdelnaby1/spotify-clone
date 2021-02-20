import React,
{createContext,useContext,
useReducer} 
from 'react';
//1. Initialize the Context
export const DataLayerContext = createContext()

//2. Create the Provider
export const DataLayer  = ({ initialState,reducer,children}) => (
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext)
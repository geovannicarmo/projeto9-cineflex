import React, { useState, createContext, useContext } from "react";

const InfContext = createContext

export default function InfProvider({children})  {
const [inf, setInf] =useState

    return( <InfContext.Provider value={{inf, setInf}}> {children} </InfContext.Provider>)
}


export function useInf(){
    const context =useContext(InfContext);
    const { inf, setInf } = context
}
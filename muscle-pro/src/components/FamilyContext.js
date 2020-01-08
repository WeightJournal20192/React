import React, { createContext } from 'react'

const FamilyContext = createContext({});

export const FamilyProvider = FamilyContext.Provider();
export const FamilyConsumer = FamilyContext.Consumer();

export default FamilyContext;
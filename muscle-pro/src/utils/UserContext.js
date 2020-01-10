import React from "react";

// import { createContext } from 'react'

const UserContext = React.createContext({})
// export const UserProvider = UserContext.Provider();
// export const UserConsumer = UserContext.Consumer();

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext

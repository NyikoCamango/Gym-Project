import { createContext, useState, useContext, useMemo } from 'react'
const UserContext = createContext({
  user: '',
  setUser: () => {},
});


export {UserContext}
import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

// app.js mein we have passes the childrens in LoginContext so here also we have to pass the childrens
const ContextProvider = ({children}) => {

    const [ account, setAccount ] = useState('');
    
    return (
        <LoginContext.Provider value={{ account, setAccount }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;
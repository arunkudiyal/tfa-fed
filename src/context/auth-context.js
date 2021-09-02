import React from 'react';

const AuthContext = React.createContext({
    // Auxilary / Secondary / Filling Context
    authenticated: false,
    login: () => {} 
})

export default AuthContext;
import React, {createContext, useContext, useState} from 'react';
const ProfileContext = createContext();



export const ProfileProvider = ({children}) =>{
    const[profile] = useState(true);

    return(
        <ProfileContext.Provider value={profile}>
        {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);


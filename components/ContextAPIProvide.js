'use client';
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [state, setState] = useState({
        theme: 'light',
        user: null,
        blogIdGet: null
    });

    const updateState = (newState) => {
        setState((prevState) => ({
            ...prevState,
            ...newState
        }));
    };

    return <MyContext.Provider value={{ state, updateState }}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
    return useContext(MyContext);
};

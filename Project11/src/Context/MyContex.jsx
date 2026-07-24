import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || [],
    );

    const [screen, setScreen] = useState(
        localStorage.getItem("screen") || "login",
    );

    return (
        <MyStore.Provider value={{ user, setUser, setScreen, screen }}>
            {children}
        </MyStore.Provider>
    );
};

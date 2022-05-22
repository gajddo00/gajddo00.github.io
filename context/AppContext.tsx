import { createContext, Dispatch, SetStateAction, useState } from "react";
import { JwtDto, ProfileDto } from "../api";

interface AppState {
    user?: ProfileDto;
    setUser?: Dispatch<SetStateAction<ProfileDto>>;
    auth?: JwtDto;
    setAuth?: Dispatch<SetStateAction<JwtDto>>;
}

const defaultState = {};

export const AppContext = createContext<AppState>(defaultState);

export const AppProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<ProfileDto>({});
    const [auth, setAuth] = useState<JwtDto>({});

    return (
        <AppContext.Provider value={
            { user, setUser, auth, setAuth }
        }>
            {children}
        </AppContext.Provider>
    );
};

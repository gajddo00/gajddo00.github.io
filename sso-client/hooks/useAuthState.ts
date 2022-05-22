import { useDebugValue } from "react";
import useGlobalState from "./useGlobalState";

const useAuthState = () => {
    const { auth, setAuth } = useGlobalState();
    return { auth, setAuth }
}

export default useAuthState;
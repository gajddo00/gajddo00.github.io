import useGlobalState from "./useGlobalState";

const useUser = () => {
    const { user, setUser } = useGlobalState();
    return { user, setUser }
}

export default useUser;
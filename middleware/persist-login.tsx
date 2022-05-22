import useAxiosMiddleware from "../hooks/useAxiosMiddleware";

type PersistLoginProps = {
    children: JSX.Element
}

const PersistLogin = ({ children }: PersistLoginProps) => {
    useAxiosMiddleware();
    return children;
}

export default PersistLogin;
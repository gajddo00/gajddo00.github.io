import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

const useGlobalState = () => {
    return useContext(AppContext);
}

export default useGlobalState;
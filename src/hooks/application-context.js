import { useContext } from 'react';

import { Context } from '../store/_store';

const useApplicationContext = () => {
    const [state, dispatch] = useContext(Context);

    return {
        state,
        dispatch
    }
}

export default useApplicationContext;
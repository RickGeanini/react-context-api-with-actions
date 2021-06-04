import React, {useEffect} from 'react';

// hooks
import useApplicationContext from './hooks/application-context'

import { getIsLoading } from './selectors/application.selector'

const Products = () => {
    const {state, dispatch} = useApplicationContext();

    const handClick = () => {
        dispatch({type: 'SET_LOADING', isLoading: !getIsLoading(state)});
    }

    return (
        <div>
            {getIsLoading(state) ? 'Carregou' : 'Não Carregou'}
            <button onClick={handClick}>Carregar</button>
        </div>
    );
};


export default Products;
import mergeState from '../../lib/merge-state';

const initialState = {
    isRequesting: false,
    didInvalidate: false,
    initialized: false,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PENDING_PRODUCTS':
            return mergeState(state, {
                ...initialState,
                isRequesting: true 
            });
        case 'SUCCESS_PRODUCTS':
            return mergeState(state, {
                ...initialState,
                isRequesting: false,
                initialized: true,
                result: action.result,
                error: undefined
            });
        case 'ERROR_PRODUCTS':
            return mergeState(state, {
                ...initialState,
                isRequesting: false,
                initialized: false,
                result: undefined,
                error: action.error 
            });
        default: 
            return state;
    }
};

export default productsReducer;
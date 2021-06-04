const combineReducers = (reducers) => {
    return (state, action) => {
        const keys = Object.keys(reducers);

        const globalState = { ...state };
        
        keys.forEach((key) => {
            globalState[key] = reducers[key](globalState[key], action);
        });

        return globalState;
    };
};

export default combineReducers;
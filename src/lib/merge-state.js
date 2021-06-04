const mergeState = (state, newState) =>
    Object.assign({}, state, newState);

export default mergeState;
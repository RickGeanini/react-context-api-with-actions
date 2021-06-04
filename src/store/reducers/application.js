const initialState = {
    isLoading: false
}

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING': {
          return {
              ...state,
              isLoading: action.isLoading
          }
        }      
        default: 
            return state;
    }
};

export default applicationReducer;
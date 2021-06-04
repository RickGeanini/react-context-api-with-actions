import combineReducers from '../../lib/combine-reducer'

import applicationReducer from './application'
import productsReducer from './products'

const rootReducer = combineReducers({ 
    application: applicationReducer,
    products: productsReducer
});

export default rootReducer;
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default Store

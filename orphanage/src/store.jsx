import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {} from './actions/orphanageActions'
import {
  orphanageListReducer,
  orphanageAddReducer,
  orphanageDetailsReducer,
  orphanageUpdateReducer,
  orphanageDeleteReducer,
} from './reducers/orphanageReducer'

const reducer = combineReducers({
  orphanagesList: orphanageListReducer,
  orphanagesAdd: orphanageAddReducer,
  orphanagesUpdate: orphanageUpdateReducer,
  orphanageDetails: orphanageDetailsReducer,
  orphanageDelete: orphanageDeleteReducer,
})

const initialState = {}

const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

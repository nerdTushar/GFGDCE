import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {registerUserReducer,loginUserReducer} from './reducers/userReducer';


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const rootReducer = combineReducers({
    registerUserReducer,
    loginUserReducer,
});

const initialState = {
    loginUserReducer : {
        currentUser : currentUser
    },
};
const middleware = [thunk];

const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
    + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
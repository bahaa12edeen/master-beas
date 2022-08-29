import priceCounter from "./reducer";
import {combineReducers} from 'redux';


const AllReducers=combineReducers({
    salary:priceCounter,
});

export default AllReducers;
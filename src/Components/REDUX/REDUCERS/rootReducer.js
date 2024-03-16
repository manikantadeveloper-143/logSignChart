import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import concurrentReducer from "./concurrentReducer";
import { filterReducer } from "./filterReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
                                     products:productReducer,
                                     user:userReducer,
                                     cart:cartReducer,
                                     filter:filterReducer,
                                     concurrent:concurrentReducer
                                    })

export default rootReducer
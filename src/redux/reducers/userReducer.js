import { handleActions } from "redux-actions";
import { userTypes } from "../actions/userAction";
import moment from "moment";
import { Map, fromJS, merge } from "immutable";

const initState = fromJS({
    
});

const userReducer = handleActions(
  {
    [userTypes.USERPAGE_SUCCESS]: (state, action) => {
      return state.merge({
        userpage: action.data
      });
    },
    [userTypes.REMOVE_SUCCESS]: (state, action) => {
      return state.merge({
        remove: action.data
      });
    },

    [userTypes.MANAGERPAGE_SUCCESS]: (state, action) => {
      return state.merge({
        managerpage: action.data
      });
    },
 
  },
  initState
);

export default userReducer;


//
//DELETE

//MANAGERPAGE
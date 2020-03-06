import { createActions } from "redux-actions";

export const productTypes = {
//   AUTH_REQUEST: "AUTH_REQUEST",
//   AUTH_SUCCESS: "AUTH_SUCCESS",
//   AUTH_FAILURE: "AUTH_FAILURE",

//   SIGN_OUT: "SIGN_OUT",

//   CHANGE_PASSWORD: "CHANGE_PASSWORD"

PRODUCTLIST:"PRODUCTLIST",
PRODUCTLIST_SUCCESS:"PRODUCTLIST_SUCCESS",
};

export default createActions({
//   [authTypes.AUTH_REQUEST]: ({ username, password,loginType,client,appClient }) => ({ username, password,loginType,client ,appClient}),
//   [authTypes.AUTH_SUCCESS]: data => ({ data }),
//   [authTypes.AUTH_FAILURE]: () => ({}),
//   [authTypes.SIGN_OUT]: () => ({}),
//   [authTypes.CHANGE_PASSWORD]: (oldPassword, newPassword) => ({ oldPassword, newPassword })
[productTypes.PRODUCTLIST]: data=> ({data})
});

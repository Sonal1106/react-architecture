/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

// import { fromJS } from "immutable";
// import Cookie from "js-cookie";

// import {
//   LOAD_REPOS,
//   VERIFIED,
//   TOKEN,
//   CUSTOMER,
//   CURRENT_CUSTOMER,
//   LOGOUT
// } from "./constants";

// // The initial state of the App
// const initialState = fromJS({
//   token: Cookie.get("token"),
//   verified: undefined,
//   currentUser: {
//     email: null,
//     name: null,
//     loginId: null,
//     phone: null,
//     customerId: null
//   },
//   user: {}
// });

// function appReducer(state = initialState, action) {
//   switch (action.type) {
//     case LOAD_REPOS:
//       return state.set("loading", true).set("error", false);
//     case TOKEN:
//       return state.set("token", action.payload).set("verified", undefined);
//     case VERIFIED:
//       return state.set("verified", true);
//     case CUSTOMER: {
//       const { body } = action.payload;
//       return state.set("customerId", body.customer_id);
//     }
//     case LOGOUT:
//       return fromJS({});
//     case CURRENT_CUSTOMER: {
//       const user = {
//         customerId: 11,
//         name: "Sonal Singh",
//         phone: 7702430412,
//         email: "sonal.singh@rubique.com",
//         loginId: 121
//       };
//       return state.set("currentUser", user);
//     }
//     default:
//       return state;
//   }
// }

// export default appReducer;

import {
  INCREMENT_REQUESTED,
  INCREMENT,
  DECREMENT_REQUESTED,
  DECREMENT
} from "./constants";

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      };

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      };

    default:
      return state;
  }
}

export default counterReducer;

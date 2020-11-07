import update from "react-addons-update";
import { SUCCESSS_USERINFO_LOADING } from "../actions/userInfo.actions.js";

const storeInfo = {
    information: [
  
    ],
  };

  export default (store = storeInfo, action) => {
    switch (action.type) {
        case SUCCESSS_USERINFO_LOADING: {
            return update(store, {
              information: { $set: action.payload.information}
            })
          }
        default:
      return store;
  }
};

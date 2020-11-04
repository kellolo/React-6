import { RSAA, getJSON } from "redux-api-middleware";

export const START_CHATS_ADD_DIALOG = "@@chats/START_ADD_DIALOG";
export const FAIL_CHATS_ADD_DIALOG = "@@chats/FAIL_ADD_DIALOG";
export const SUCCESSS_CHATS_ADD_DIALOG = "@@chats/SUCCESSS_ADD_DIALOG";

export const addDialog = (url) => ({
  [RSAA]: {
    endpoint: url,
    method: "GET",
    headers: { "Content-Type": "application/json" },
    types: [
        START_CHATS_ADD_DIALOG,
      {
        type: SUCCESSS_CHATS_ADD_DIALOG,
        payload: (action, state, res) =>
          getJSON(res).then((data) => ({ chats: data })),
      },
      FAIL_CHATS_ADD_DIALOG,
    ],
  },
});

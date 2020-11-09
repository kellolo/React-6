import { RSAA, getJSON } from "redux-api-middleware";

export const START_CHATS_DELETE_DIALOG = "@@chats/START_DELETE_DIALOG";
export const FAIL_CHATS_DELETE_DIALOG = "@@chats/FAIL_DELETE_DIALOG";
export const SUCCESSS_CHATS_DELETE_DIALOG = "@@chats/SUCCESSS_DELETE_DIALOG";

export const deleteDialog = (url) => ({
  [RSAA]: {
    endpoint: url,
    method: "GET",
    headers: { "Content-Type": "application/json" },
    types: [
        START_CHATS_DELETE_DIALOG,
      {
        type: SUCCESSS_CHATS_DELETE_DIALOG,
        payload: (action, state, res) =>
          getJSON(res).then((data) => ({ chats: data })),
      },
      FAIL_CHATS_DELETE_DIALOG,
    ],
  },
});

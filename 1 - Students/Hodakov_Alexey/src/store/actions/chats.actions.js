// export let ADD_CHAT = "@@chat/ADD_CHAT";
import { RSAA, getJSON } from "redux-api-middleware";

export const START_CHATS_LOADING = "@@chats/START_LOADING";
export const FAIL_CHATS_LOADING = "@@chats/FAIL_LOADING";
export const SUCCESSS_CHATS_LOADING = "@@chats/SUCCESSS_LOADING";

export const loadChats = (url) => ({
  [RSAA]: {
    endpoint: url,
    method: "GET",
    headers: { "Content-Type": "application/json" },
    types: [
      START_CHATS_LOADING,
      {
        type: SUCCESSS_CHATS_LOADING,
        payload: (action, state, res) =>
          getJSON(res).then((data) => ({ chats: data })),
      },
      FAIL_CHATS_LOADING,
    ],
    // types: [{/* START */},{/* SUCCESS */},{/* FAIL */}]
  },
});

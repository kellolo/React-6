import { RSAA, getJSON } from "redux-api-middleware";

export const START_USERINFO_LOADING = "@@userinfo/START_LOADING";
export const FAIL_USERINFO_LOADING = "@@userinfo/FAIL_LOADING";
export const SUCCESSS_USERINFO_LOADING = "@@userinfo/SUCCESSS_LOADING";

export const loadUserInfo = url => ({
    [RSAA]: {
      endpoint: url,
      method: "GET",
      headers: { "Content-Type": "application/json" },
      types: [
        START_USERINFO_LOADING,
        {
          type: SUCCESSS_USERINFO_LOADING,
          payload: (action, state, res) => getJSON(res).then((data) => ({ information: data})),
        },
        FAIL_USERINFO_LOADING,
      ],
      // types: [{/* START */},{/* SUCCESS */},{/* FAIL */}]
    },
  });
  
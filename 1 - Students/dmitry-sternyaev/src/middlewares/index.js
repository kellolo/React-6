import thunk from "redux-thunk";

import { chatsMiddleware } from "./chatsMiddleware";

export default [thunk, chatsMiddleware];

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";

const store = configureStore({
  //Fix = to :
  reducer: {
    user: userReducer,
  },
});

export default store;

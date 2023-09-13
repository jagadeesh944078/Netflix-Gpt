import userSlice from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default appStore;

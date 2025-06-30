import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productBasicDetailsReducer from "./utilities/slices/productBasicDetailsSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["product"],
};

const rootReducer = combineReducers({
    product: productBasicDetailsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: {
        productDetails: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

export { store, persistor };

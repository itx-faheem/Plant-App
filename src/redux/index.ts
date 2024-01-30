import { configureStore, combineReducers } from "@reduxjs/toolkit";
import SignUpInfo from "./userReducer";
import { persistReducer, persistStore } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage'


const combines = combineReducers({
    signCartRduser: SignUpInfo
})

const persistConfig = {
    key: 'root',
    storage,
};

let persistReducerData = persistReducer(persistConfig, combines)

export const store = configureStore({
    reducer: persistReducerData
})


export const persistor = persistStore(store);



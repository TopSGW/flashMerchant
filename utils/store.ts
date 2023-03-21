import { configureStore , combineReducers, ThunkAction, Action} from '@reduxjs/toolkit'
import  ordersSlice  from './slice/ordersSlice'
import storage from "redux-persist/lib/storage";
import { createWrapper } from 'next-redux-wrapper';
import { persistReducer, persistStore ,  
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';

const rootReducer = combineReducers({
    orders: ordersSlice,
  });
const makeConfiguredStore = () =>
  configureStore({
     reducer: rootReducer,
  });
export const makeStore = () => {
    const isServer = typeof window === "undefined";
    if (isServer) {
      return makeConfiguredStore();
    } else {
      // we need it only on client side
      
      const persistConfig = {
        key: "nextjs",
        whitelist: ["orders"], // make sure it does not clash with server keys
        storage,
      };
      const persistedReducer = persistReducer(persistConfig, rootReducer);
      let store: any = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      });
      store.__persistor = persistStore(store); // Nasty hack
      return store;
    }
  }; 
export type AppStore = ReturnType<typeof makeStore>;  
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper(makeStore);


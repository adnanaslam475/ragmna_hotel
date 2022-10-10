import { combineReducers, configureStore } from '@reduxjs/toolkit'
import firebaseAuthSlice from '../components/Authentication/firebaseAuth/firebaseAuthSlice'
import businessSetupSlice from '../components/Setup/BusinessSetup/businessSetupSlice'
import propertyInfoSlice from '../components/Setup/PropertySetup/AddProperty/PropertyInfo/propertyInfoSlice'
import reservationSlice from '../components/Setup/PropertySetup/AddProperty/Reservation/reservationSlice'
import propertySetupSlice from '../components/Setup/PropertySetup/propertySetupSlice'
import { api } from './Services/api'

const CombineReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth:firebaseAuthSlice,
  supplier:businessSetupSlice,
  proprtySetup:propertySetupSlice,
  propertyInfo:propertyInfoSlice,
  reservation:reservationSlice,
})

export const Store = configureStore({
  reducer: CombineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch
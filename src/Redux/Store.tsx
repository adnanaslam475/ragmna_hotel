import { combineReducers, configureStore } from "@reduxjs/toolkit";
import firebaseAuthSlice from "../components/Authentication/firebaseAuth/firebaseAuthSlice";
import businessSetupSlice from "../components/Setup/BusinessSetup/businessSetupSlice";
import amenitiesSlice from "../components/Setup/PropertySetup/AddProperty/Amenities/amenitiesSlice";
import propertyInfoSlice from "../components/Setup/PropertySetup/AddProperty/PropertyInfo/propertyInfoSlice";

import reservationSlice from "../components/Setup/PropertySetup/AddProperty/Reservation/reservationSlice";
import propertySetupSlice from "../components/Setup/PropertySetup/propertySetupSlice";
import ledgerAccountSlice from "../components/Setup/LedgerSetup/ledgerAccountSetupSlice";
import ratePolicySlice from "../components/Setup/RateSetup/Ratepolicies/ratePolicySlice";

import { api } from "./Services/api";
import globalSlice from "./globalReducer";
import taxSetupSlice from "../components/Setup/PropertySetup/AddProperty/TaxSetup/taxSetupSlice";
import RateSetupSlice from "../components/Setup/RateSetup/RateSetupSlice";
import profileSlice from "../components/Profile/profileSlice";

const CombineReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  profile:profileSlice,
  auth: firebaseAuthSlice,
  supplier: businessSetupSlice,
  proprtySetup: propertySetupSlice,
  ledgerAccount: ledgerAccountSlice,
  propertyInfo: propertyInfoSlice,
  reservation: reservationSlice,
  policies: ratePolicySlice,
  amenities: amenitiesSlice,
  global: globalSlice,
  rateSetup: RateSetupSlice,
  taxCongfig: taxSetupSlice,
});

export const Store = configureStore({
  reducer: CombineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch;

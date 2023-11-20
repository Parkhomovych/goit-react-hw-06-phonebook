// import {  createSlice } from '@reduxjs/toolkit';
// // import { addContact, setDelete, setFilter } from './actions';

// const contactslState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactslState,
//   reducers: {
//     addContact(state, action) {
//         console.log(state);
//         console.log(action);
//     },
//     setDelete(state, action) {
//       state.filter(elem => elem.id !== action.payload);
//     },
//   },
// // });
// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     filter(state, action) {
//       return action.payload;
//     },
//   },
// });

// export const contactsReducer = createReducer(contactslState, {
//   [addContact]: (state, action) => [...state, action.payload], // IMMER => state.push(action.payload)
//   [setDelete]: (state, action) => state.filter(elem => elem.id !== action.payload),
// });
// export const filterReducer = createReducer('', {
//   [setFilter]: (state, action) => action.payload,
// });
//=======================================
// export const contactsReducer = (state = contactslState, action) => {
//   switch (action.type) {
//     case 'contacts/addContacts':
//       return [...state, action.payload];
//     case 'contacts/setDelete':
//       return state.filter(elem => elem.id !== action.payload);

//     default:
//       return state;
//   }
// };
// export const filterReducer = (state = filterState, action) => {
//   switch (action.type) {
//     case 'filter/setFilter':
//       return action.payload;
//     default:
//       return state;
//   }
// };
// import { combineReducers } from 'redux';
// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

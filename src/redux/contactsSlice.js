import { createSlice } from '@reduxjs/toolkit';

const contactslState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactslState,
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    setDelete(state, action) {
      return state.filter(elem => elem.id !== action.payload);
    },
  },
});

export const { addContact, setDelete } = contactsSlice.actions; // мої екшени

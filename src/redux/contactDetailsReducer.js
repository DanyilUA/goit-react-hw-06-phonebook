import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';


const contactDetailsSlice = createSlice({
  name: 'phonebook',
  initialState: initialState,
  reducers: {

    addContact(state, action) {
          const newContact = action.payload;
          const existingContact = state.contacts.find(
            contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

          if (existingContact) {
            alert('This contact already exists.');
            return;
          } else {
      state.contacts.push(action.payload);
          }
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
      state.contacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(state.filter.toLowerCase())
      );
    },
  },
});

export const { addContact, deleteContact, filterContacts } = contactDetailsSlice.actions;
export const contactDetailsReducer = contactDetailsSlice.reducer;


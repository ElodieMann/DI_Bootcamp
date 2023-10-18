import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts.splice(action.payload, 1);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [
    { name: 'Rosie', number: '123-45-67', id: '1' },
    { name: 'Rosie2', number: '123-45-67', id: '2' },
    { name: 'Rosie3', number: '123-45-67', id: '3' },
    { name: 'Rosie4', number: '123-45-67', id: '4' },
    { name: 'Rosie5', number: '123-45-67', id: '5' },
    { name: 'Rosie6', number: '123-45-67', id: '6' },
    { name: 'Rosie7', number: '123-45-67', id: '7' },

];
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),    
                    }
                }
            }
        },
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
        filterContacts(state, action) {
            return state.filter(contact => contact.name.includes(action.payload))
        },
    }
});

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
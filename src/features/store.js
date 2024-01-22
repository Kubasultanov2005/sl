import { configureStore, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: localStorage.getItem('mode') ? localStorage.getItem('mode') : localStorage.setItem('mode', 'day'),
    },
    reducers: {
        toggleMode: (state, action) => {
            localStorage.setItem('mode', action.payload)
            state.mode = action.payload
        },
    },
});

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        create: false
    },
    reducers: {
        toggleCreateModal: (state, action) => {
            state.create = !state.mode
        },
        closeCreateModal: (state, action) => {
            state.create = false
        },
    },
});

export const { toggleMode } = themeSlice.actions;
export const {
    toggleCreateModal,
    closeCreateModal
} = modalSlice.actions;

export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        modals: modalSlice.reducer,
    },
});

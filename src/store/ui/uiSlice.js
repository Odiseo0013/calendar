import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice(
        {
            name: 'ui',
            initialState: {
            isDateModalOpen: false
        },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: ( state ) => {
            state.isDateModalOpen = false;
            state.isCloseModal = true;
        },        
    }
});


// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
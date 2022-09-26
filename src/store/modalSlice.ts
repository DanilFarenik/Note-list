import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormValue, ModalLevel, ModalState, NamesCategory } from "../type";

const defaultValuesForm = {
  name: "",
  category: NamesCategory.task,
  text: "",
}

const initialState: ModalState = {
  isOpen: false,
  type: ModalLevel.ADD,
  defaultValuesForm: defaultValuesForm,
}

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    add(state) {
      state.isOpen = true;
      state.type = ModalLevel.ADD;
      state.defaultValuesForm = defaultValuesForm;
    },
    edit(state, action: PayloadAction<FormValue>) {
      state.isOpen = true;
      state.type = ModalLevel.EDIT;
      state.defaultValuesForm = action.payload;
    },
    close(state) {
      state.isOpen = false;
    },
  }
})


export const { add, close, edit } = modalSlice.actions;
export default modalSlice.reducer;
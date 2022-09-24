import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Note {
  name: string,
  date: string[],
  category: string,
  text: string,
  dateOfCreation: string,
  archived: boolean,
  id: number,
}

type NoteState = {
  notes: Note[]
};


const initialState: NoteState = { notes: [] };

const noteSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNoteData(state, action: PayloadAction<Note>) {

    },
    deleteNoteData(state, action) {

    },
    editNoteData(state, action) {

    },
    archiveNoteData(state, action) {

    },
  }
})

export const { } = noteSlice.actions;

export default noteSlice.reducer;
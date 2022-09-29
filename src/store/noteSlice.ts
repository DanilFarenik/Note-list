import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { FormValue, Note, NoteState } from "../type";
import { searchIndexNote } from "../util";


const initialState: NoteState = {
  isArchive: false,
  list: [{ "name": "Note1", "date": [], "category": "task", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque, magnam eius earum voluptatum ab obcaecati", "dateOfCreation": "22.09.2022", "archived": false, "id": 941338190646 }, { "name": "Note 2", "date": ["20.12.2002"], "category": "idea", "text": "Lorem ipsum dolor sit amet 20/12/2002 consectetur adipisicing elit. Illum minima tempore doloremque", "dateOfCreation": "22.09.2022", "archived": false, "id": 1223242950903 }, { "name": "Note 3", "date": [], "category": "random", "text": "Lorem ipsum dolor sit amet", "dateOfCreation": "22.09.2022", "archived": false, "id": 888441480812 }, { "name": "Note 4", "date": [], "category": "random", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque", "dateOfCreation": "22.09.2022", "archived": false, "id": 461342351531 }, { "name": "Note 5", "date": [], "category": "task", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque, magnam", "dateOfCreation": "22.09.2022", "archived": false, "id": 791725710346 }, { "name": "Note 6", "date": [], "category": "quote", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque", "dateOfCreation": "22.09.2022", "archived": false, "id": 962401358775 }, { "name": "Note 7", "date": ["02.03.2010", "03.11.2013"], "category": "task", "text": "Lorem ipsum 02-03-2010 dolor 03/11/2013 sit amet", "dateOfCreation": "22.09.2022", "archived": false, "id": 747862329779 }]
};


const noteSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {
      state.list.push(action.payload);
    },
    deleteNote(state, action: PayloadAction<number>) {
      const id: number | undefined = searchIndexNote(action.payload, state.list)

      if (id === undefined) return;

      state.list = [...state.list.slice(0, id), ...state.list.slice(id + 1, state.list.length)];
    },
    editNote(state, action: PayloadAction<Note>) {
      const id: number | undefined = searchIndexNote(action.payload.id, state.list)

      if (id === undefined) return;

      state.list = [...state.list.slice(0, id), action.payload, ...state.list.slice(id + 1, state.list.length)];
    },
    archiveNote(state, action: PayloadAction<number>) {
      const id: number | undefined = searchIndexNote(action.payload, state.list)

      if (id === undefined) return;

      state.list = [...state.list.slice(0, id), { ...state.list[id], archived: !state.list[id].archived }, ...state.list.slice(id + 1, state.list.length)];
    },
    archive(state) {
      state.isArchive = !state.isArchive;
    }
  }
})

export const { addNote, deleteNote, editNote, archiveNote, archive } = noteSlice.actions;

export default noteSlice.reducer;
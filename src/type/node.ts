export interface Note {
  name: string,
  date: string[],
  category: string,
  text: string,
  dateOfCreation: string,
  archived: boolean,
  id: number,
}

export type NoteState = {
  list: Note[],
  isArchive: boolean,
};
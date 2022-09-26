import { Note } from "../type";

export const uuid = (): number => Math.floor(Math.random() * Date.now());

export const searchIndexNote = (uuid: number, notes: Note[]): number | undefined => {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === uuid) return i;
  }
}
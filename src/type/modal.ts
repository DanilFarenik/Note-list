export enum ModalLevel {
  EDIT = "EDIT",
  ADD = "ADD",
}

export interface FormValue {
  name: string,
  category: string,
  text: string,
  id?: number,
}


export interface ModalState {
  isOpen: boolean,
  type: ModalLevel,
  defaultValuesForm: FormValue,
}
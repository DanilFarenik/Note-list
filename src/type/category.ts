export interface Category {
  name: string,
  active: number,
  archive: number,
  id: number,
}

export enum NamesCategory {
  idea = "idea",
  quote = "quote",
  random = "random",
  task = "task",
}

export interface AccumulateCategory {
  [key: string]: {
    active: number,
    archive: number,
  }
}

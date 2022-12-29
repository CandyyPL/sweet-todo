export interface ITodo {
  id: number
  title: string
  description: string
  color: string
  done: boolean
}

export interface ITodoList {
  id: number
  name: string
  todos: ITodo[]
}

export type TTodoListsList = ITodoList[]

export const todoInitial: ITodo = {
  id: 0,
  title: '',
  description: '',
  color: '',
  done: false,
}

export const todoListInitial: ITodoList = {
  id: 0,
  name: '',
  todos: [],
}

export const todoListsListInitial: TTodoListsList = []

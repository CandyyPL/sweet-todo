import { ITodoList, TTodoListsList } from '@/types/Todo.types'

export interface ITodosProviderProps {
  children: JSX.Element
}

export interface ITodosContext {
  todoLists: TTodoListsList
  handleAddList: (name: string) => void
  handleDeleteList: (id: number) => void
  handleEditListName: (listId: number, newName: string) => void
  handleAddTodo: (listId: number, title: string, color: string) => void
  handleDeleteTodo: (listId: number, todoId: number) => void
  handleEditTodoTitle: (listId: number, todoId: number, newTitle: string) => void
  handleFinishTodo: (listId: number, todoId: number) => void
  currentList: ITodoList | null
  setCurrentList: (list: ITodoList) => void
}

export const todosContextInitial = {
  todoLists: [],
  handleAddList: (name: string) => {},
  handleDeleteList: (id: number) => {},
  handleEditListName: (listId: number, newName: string) => {},
  handleAddTodo: (listId: number, title: string, color: string) => {},
  handleDeleteTodo: (listId: number, todoId: number) => {},
  handleEditTodoTitle: (listId: number, todoId: number, newTitle: string) => {},
  handleFinishTodo: (listId: number, todoId: number) => {},
  currentList: { id: 0, name: '', todos: [] },
  setCurrentList: (list: ITodoList) => {},
}

export enum EChangeActions {
  TODO_ADD,
  TODO_DEL,
  TODO_EDIT_TITLE,
  LIST_EDIT_NAME,
  TODO_FINISH,
}

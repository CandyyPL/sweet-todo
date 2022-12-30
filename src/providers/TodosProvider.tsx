import { TTodoListsList, todoListsListInitial, ITodoList, ITodo } from '@/types/Todo'
import {
  EChangeActions,
  ITodosContext,
  ITodosProviderProps,
  todosContextInitial,
} from '@/types/TodosProvider'
import { FC, createContext, useState, useEffect } from 'react'

export const TodosContext = createContext<ITodosContext>(todosContextInitial)

const TodosProvider: FC<ITodosProviderProps> = ({ children }) => {
  const [todoLists, setTodoLists] = useState<TTodoListsList>(todoListsListInitial)
  const [currentListIdx, setCurrentListIdx] = useState<number | null>(null)

  useEffect(() => {
    const currList = todoLists.find(list => list.id === currentListIdx)

    if (currList == undefined) setCurrentListIdx(0)
    if (todoLists.length == 1) setCurrentListIdx(todoLists[0].id)
  }, [todoLists])

  const handleAddList = (name: string) => {
    const newTodosList: ITodoList = { id: Math.floor(Math.random() * 10000), name, todos: [] }
    const newTodoLists = [...todoLists, newTodosList]
    setTodoLists(newTodoLists)
  }

  const handleDeleteList = (id: number) => {
    const newTodoLists = todoLists.filter(list => list.id !== id)
    setTodoLists(newTodoLists)
  }

  const handleEditListName = (listId: number, newName: string) => {
    handleMakeChanges(listId, EChangeActions.LIST_EDIT_NAME, null, newName)
  }

  const handleMakeChanges = (
    listId: number | null = null,
    mode: EChangeActions | null = null,
    todoId: number | null = null,
    payload: ITodo | string | null = null
  ) => {
    if (listId == null || mode == null) return

    if (
      (mode == EChangeActions.TODO_EDIT_TITLE || mode == EChangeActions.TODO_FINISH) &&
      todoId == null
    )
      return

    const targetList = todoLists.find(list => list.id === listId) as ITodoList
    const targetTodo = targetList.todos.find(todo => todo.id === todoId) as ITodo

    let newTargetList: ITodoList = { ...targetList }

    switch (mode) {
      case EChangeActions.TODO_ADD:
        newTargetList = { ...targetList, todos: [...targetList.todos, payload as ITodo] }
        break
      case EChangeActions.TODO_DEL:
        newTargetList = {
          ...targetList,
          todos: targetList.todos.filter(todo => todo.id !== todoId),
        }
        break
      case EChangeActions.TODO_EDIT_TITLE:
        Object.assign(targetTodo, { ...targetTodo, title: payload })

        newTargetList = {
          ...targetList,
          todos: [...targetList.todos, targetTodo],
        }
        break
      case EChangeActions.LIST_EDIT_NAME:
        newTargetList = { ...targetList, name: payload as string }
        break
      case EChangeActions.TODO_FINISH:
        Object.assign(targetTodo, { ...targetTodo, done: true })

        newTargetList = {
          ...targetList,
          todos: [...targetList.todos, targetTodo],
        }
        break
    }

    const newTodoLists = [...todoLists, newTargetList]
    setTodoLists(newTodoLists)
  }

  const handleAddTodo = (listId: number, title: string, description: string, color: string) => {
    const newTodo: ITodo = {
      id: Math.floor(Math.random() * 10000) + 1,
      title,
      description,
      color,
      done: false,
    }

    handleMakeChanges(listId, EChangeActions.TODO_ADD, null, newTodo)
  }

  const handleDeleteTodo = (listId: number, todoId: number) => {
    handleMakeChanges(listId, EChangeActions.TODO_DEL, todoId, null)
  }

  const handleEditTodoTitle = (listId: number, todoId: number, newTitle: string) => {
    handleMakeChanges(listId, EChangeActions.TODO_EDIT_TITLE, todoId, newTitle)
  }

  const handleFinishTodo = (listId: number, todoId: number) => {
    handleMakeChanges(listId, EChangeActions.TODO_FINISH, todoId)
  }

  const provide = {
    todoLists,
    handleAddList,
    handleDeleteList,
    handleEditListName,
    handleAddTodo,
    handleDeleteTodo,
    handleEditTodoTitle,
    handleFinishTodo,
    currentListIdx,
    setCurrentListIdx,
  }

  return <TodosContext.Provider value={provide}>{children}</TodosContext.Provider>
}

export default TodosProvider

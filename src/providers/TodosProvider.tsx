import { TTodoListsList, todoListsListInitial, ITodoList, ITodo } from '@/types/Todo.types'
import {
  EChangeActions,
  ITodosContext,
  ITodosProviderProps,
  todosContextInitial,
} from '@/types/TodosProvider.types'
import { FC, createContext, useState, useEffect } from 'react'

export const TodosContext = createContext<ITodosContext>(todosContextInitial)

const TodosProvider: FC<ITodosProviderProps> = ({ children }) => {
  const [todoLists, setTodoLists] = useState<TTodoListsList>(todoListsListInitial)
  const [currentList, setCurrentList] = useState<ITodoList | null>(null)

  useEffect(() => {
    const storageTodoLists = localStorage.getItem('todoLists')

    if (storageTodoLists != undefined || storageTodoLists != null)
      setTodoLists(JSON.parse(storageTodoLists))
  }, [])

  useEffect(() => {
    localStorage.setItem('todoLists', JSON.stringify(todoLists))

    if (todoLists.length == 0) {
      setCurrentList(null)
      return
    }

    const currList = todoLists[todoLists.length - 1] as ITodoList

    setCurrentList(currList)
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

  const handleEditTodoItem = (originList: ITodoList, todoItem: ITodo) => {
    const cleared = originList.todos.filter(todo => todo.id !== todoItem.id)
    cleared.push(todoItem)
    return cleared
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
    let newTodos: ITodo[] = [...targetList.todos]

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

        newTodos = handleEditTodoItem(targetList, targetTodo)

        newTargetList = {
          ...targetList,
          todos: newTodos,
        }
        break
      case EChangeActions.LIST_EDIT_NAME:
        newTargetList = { ...targetList, name: payload as string }
        break
      case EChangeActions.TODO_FINISH:
        Object.assign(targetTodo, { ...targetTodo, done: true })

        newTodos = handleEditTodoItem(targetList, targetTodo)

        newTargetList = {
          ...targetList,
          todos: newTodos,
        }
        break
    }

    const newTodoLists = todoLists.filter(list => list.id !== listId)
    newTodoLists.push(newTargetList)
    setTodoLists(newTodoLists)
  }

  const handleAddTodo = (listId: number, title: string, color: string) => {
    const newTodo: ITodo = {
      id: Math.floor(Math.random() * 10000) + 1,
      title,
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
    currentList,
    setCurrentList,
  }

  return <TodosContext.Provider value={provide}>{children}</TodosContext.Provider>
}

export default TodosProvider

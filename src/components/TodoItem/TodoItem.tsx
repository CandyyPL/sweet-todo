import { TodoItemWrapper } from '@/components/TodoItem/TodoItem.styles'
import { ITodo } from '@/types/Todo'
import { FC } from 'react'

interface ITodoItemProps {
  todo: ITodo
}

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  return <TodoItemWrapper>{todo.title}</TodoItemWrapper>
}

export default TodoItem

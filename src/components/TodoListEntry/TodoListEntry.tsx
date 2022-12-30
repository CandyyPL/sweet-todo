import { TodoListEntryWrapper } from '@/components/TodoListEntry/TodoListEntry.styles'
import { ITodoList } from '@/types/Todo'
import { FC } from 'react'

interface ITodoListEntryProps {
  setList: (id: number) => void
  list: ITodoList
}

const TodoListEntry: FC<ITodoListEntryProps> = ({ setList, list }) => {
  return <TodoListEntryWrapper onClick={() => setList(list.id)}>{list.name}</TodoListEntryWrapper>
}

export default TodoListEntry

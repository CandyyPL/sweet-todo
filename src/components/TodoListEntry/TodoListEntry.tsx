import { TodoListEntryWrapper } from '@/components/TodoListEntry/TodoListEntry.styles'
import { ITodoList } from '@/types/Todo.types'
import { FC, useRef } from 'react'

interface ITodoListEntryProps {
  setList: (list: ITodoList) => void
  list: ITodoList
}

const TodoListEntry: FC<ITodoListEntryProps> = ({ setList, list }) => {
  const entryRef = useRef<HTMLLIElement>(null)

  return (
    <TodoListEntryWrapper onClick={() => setList(list)} ref={entryRef}>
      {list.name}
    </TodoListEntryWrapper>
  )
}

export default TodoListEntry

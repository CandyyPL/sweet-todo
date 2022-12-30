import { TodoEditModal, TodoItemWrapper } from '@/components/TodoItem/TodoItem.styles'
import { ITodo } from '@/types/Todo.types'
import { FC, useContext, useRef, useState } from 'react'
import editImg from '@/assets/edit.png'
import doneImg from '@/assets/done.png'
import deleteImg from '@/assets/delete.png'
import { ITodosContext } from '@/types/TodosProvider.types'
import { TodosContext } from '@/providers/TodosProvider'
import useModal from '@/hooks/useModal'
import Modal from '@/components/Modal/Modal'

interface ITodoItemProps {
  todo: ITodo
}

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const { handleEditTodoTitle, handleFinishTodo, handleDeleteTodo, currentList } =
    useContext<ITodosContext>(TodosContext)

  const { isOpen, handleOpenModal, handleCloseModal } = useModal()

  const [titleValue, setTitleValue] = useState<string>(todo.title)

  const todoNewTitleRef = useRef<HTMLInputElement>(null)

  const handleEditTodo = () => {
    const newTitle = titleValue

    if (newTitle == '') return

    handleEditTodoTitle(currentList!.id, todo.id, newTitle)
    handleCloseModal()
  }

  return (
    <TodoItemWrapper color={todo.color}>
      <div className={`title ${todo.done ? 'done' : ''}`}>
        <span>{todo.title}</span>
      </div>
      <div className='status'>{todo.done ? 'DONE' : 'ONGOING'}</div>
      <div className='buttons'>
        {todo.done ? null : (
          <>
            <img src={editImg} alt='edit' onClick={() => handleOpenModal()} />
            <img
              src={doneImg}
              alt='done'
              onClick={() => handleFinishTodo(currentList!.id, todo.id)}
            />
          </>
        )}

        <img
          src={deleteImg}
          alt='delete'
          onClick={() => handleDeleteTodo(currentList!.id, todo.id)}
        />
      </div>
      <Modal isOpen={isOpen}>
        <TodoEditModal>
          <input
            type='text'
            placeholder='Todo title'
            value={titleValue}
            onChange={() => setTitleValue(todoNewTitleRef.current?.value as string)}
            ref={todoNewTitleRef}
          />
          <div className='buttons'>
            <button onClick={() => handleEditTodo()}>Edit title</button>
            <button onClick={() => handleCloseModal()}>Cancel</button>
          </div>
        </TodoEditModal>
      </Modal>
    </TodoItemWrapper>
  )
}

export default TodoItem

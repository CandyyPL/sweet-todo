import Modal from '@/components/Modal/Modal'
import TodoItem from '@/components/TodoItem/TodoItem'
import {
  ColorSelect,
  TodoAddModal,
  TodoSectionWrapper,
} from '@/components/TodoSection/TodoSection.styles'
import useModal from '@/hooks/useModal'
import { TodosContext } from '@/providers/TodosProvider'
import { ITodoList } from '@/types/Todo'
import { ITodosContext } from '@/types/TodosProvider'
import { FC, SyntheticEvent, useContext, useRef, useState } from 'react'
import checkImg from '@/assets/check.png'

interface ITodoSectionProps {
  list: ITodoList
}

const colors = {
  yellow: '#FBC22C',
  red: '#D42121',
  purple: '#A93774',
  blue: '#3E5ACC',
  green: '#6DBC4E',
}

const TodoSection: FC<ITodoSectionProps> = ({ list }) => {
  const { handleAddTodo } = useContext<ITodosContext>(TodosContext)

  const { isOpen, handleOpenModal, handleCloseModal } = useModal()

  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedColorName, setSelectedColorName] = useState<string>('')

  const todoTitleInputRef = useRef<HTMLInputElement>(null)
  const todoDescInputRef = useRef<HTMLInputElement>(null)

  const handleInitAddTodo = () => {
    const title = todoTitleInputRef.current?.value as string
    const desc = todoDescInputRef.current?.value as string

    if (title == '' || desc == '') return

    handleAddTodo(list.id, title, desc, selectedColor)
    handleCloseModal()
  }

  const handleSelectColor = (color: string, event: SyntheticEvent<HTMLDivElement>) => {
    setSelectedColor(color)
    setSelectedColorName(event.currentTarget.getAttribute('name') as string)
  }

  return (
    <TodoSectionWrapper>
      <div className='todo-list'>
        {list.todos.length > 0 ? list.todos.map(todo => <TodoItem todo={todo} />) : null}
      </div>
      <div className='empty'>
        {list.id == 0 ? null : (
          <>
            <span>{list.name}</span>
            <button onClick={handleOpenModal}>Add Todo</button>
          </>
        )}
      </div>
      <Modal isOpen={isOpen}>
        <TodoAddModal>
          <div className='colors'>
            <ColorSelect
              className='color yellow'
              color={colors.yellow}
              onClick={e => handleSelectColor(colors.yellow, e)}
              name='yellow'>
              <img src={checkImg} alt='check' />
            </ColorSelect>
            <ColorSelect
              className='color red'
              color={colors.red}
              onClick={e => handleSelectColor(colors.red, e)}
              name='red'>
              <img src={checkImg} alt='check' />
            </ColorSelect>
            <ColorSelect
              className='color purple'
              color={colors.purple}
              onClick={e => handleSelectColor(colors.purple, e)}
              name='purple'>
              <img src={checkImg} alt='check' />
            </ColorSelect>
            <ColorSelect
              className='color blue'
              color={colors.blue}
              onClick={e => handleSelectColor(colors.blue, e)}
              name='blue'>
              <img src={checkImg} alt='check' />
            </ColorSelect>
            <ColorSelect
              className='color green'
              color={colors.green}
              onClick={e => handleSelectColor(colors.green, e)}
              name='green'>
              <img src={checkImg} alt='check' />
            </ColorSelect>
          </div>
          <input type='text' placeholder='Todo name' ref={todoTitleInputRef} />
          <div className='buttons'>
            <button onClick={handleInitAddTodo}>Add Todo</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </TodoAddModal>
      </Modal>
    </TodoSectionWrapper>
  )
}

export default TodoSection

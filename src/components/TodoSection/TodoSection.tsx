import Modal from '@/components/Modal/Modal'
import TodoItem from '@/components/TodoItem/TodoItem'
import {
  ColorSelect,
  TodoAddModal,
  TodoSectionWrapper,
} from '@/components/TodoSection/TodoSection.styles'
import useModal from '@/hooks/useModal'
import { TodosContext } from '@/providers/TodosProvider'
import { ITodosContext } from '@/types/TodosProvider.types'
import { FC, SyntheticEvent, useContext, useEffect, useRef, useState } from 'react'
import checkImg from '@/assets/check.png'
import { TodoEditModal } from '@/components/TodoItem/TodoItem.styles'

const colors = {
  yellow: '#FBC22C',
  red: '#DE2B2B',
  purple: '#B93C7F',
  blue: '#4E68D0',
  green: '#79C15C',
}

enum modalModes {
  TODO_ADD,
  LIST_RENAME,
}

const TodoSection: FC = () => {
  const { handleAddTodo, handleDeleteList, handleEditListName, currentList } =
    useContext<ITodosContext>(TodosContext)

  const { isOpen, handleOpenModal, handleCloseModal } = useModal()

  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedColorName, setSelectedColorName] = useState<string>('')
  const [modalMode, setModalMode] = useState<modalModes>(modalModes.TODO_ADD)
  const [nameValue, setNameValue] = useState<string>('')

  useEffect(() => {
    if (currentList == null) return

    setNameValue(currentList.name)
  }, [currentList])

  const todoTitleInputRef = useRef<HTMLInputElement>(null)

  const handleInitAddTodo = () => {
    const title = todoTitleInputRef.current?.value as string

    if (title == '') return
    if (selectedColor == '') return

    handleAddTodo(currentList!.id, title, selectedColor)
    handleCloseModal()
  }

  const handleSelectColor = (color: string, event: SyntheticEvent<HTMLDivElement>) => {
    setSelectedColor(color)
    setSelectedColorName(event.currentTarget.getAttribute('name') as string)
  }

  const listNewNameRef = useRef<HTMLInputElement>(null)

  const handleEditList = () => {
    const newName = nameValue

    if (newName == '') return

    handleEditListName(currentList!.id, newName)
    handleCloseModal()
  }

  const beforeOpenModal = (mode: modalModes) => {
    setModalMode(mode)
    handleOpenModal()
  }

  return (
    <TodoSectionWrapper>
      <div className='todo-list'>
        {currentList != null && currentList.todos.length > 0
          ? currentList.todos.map(todo => <TodoItem todo={todo} key={todo.id} />)
          : null}
      </div>
      <div className='empty'>
        {currentList == null ? null : (
          <>
            <span>{currentList!.name}</span>
            <div className='buttons'>
              <button className='edit' onClick={() => beforeOpenModal(modalModes.LIST_RENAME)}>
                Rename List
              </button>
              <button className='add' onClick={() => beforeOpenModal(modalModes.TODO_ADD)}>
                Add Todo
              </button>
              <button className='danger' onClick={() => handleDeleteList(currentList!.id)}>
                Delete List
              </button>
            </div>
          </>
        )}
      </div>
      <Modal isOpen={isOpen}>
        {modalMode == modalModes.TODO_ADD ? (
          <TodoAddModal>
            <div className='colors'>
              <ColorSelect
                className={`color yellow ${selectedColorName == 'yellow' ? 'active' : ''}`}
                color={colors.yellow}
                onClick={e => handleSelectColor(colors.yellow, e)}
                name='yellow'>
                <img src={checkImg} alt='check' />
              </ColorSelect>
              <ColorSelect
                className={`color red ${selectedColorName == 'red' ? 'active' : ''}`}
                color={colors.red}
                onClick={e => handleSelectColor(colors.red, e)}
                name='red'>
                <img src={checkImg} alt='check' />
              </ColorSelect>
              <ColorSelect
                className={`color purple ${selectedColorName == 'purple' ? 'active' : ''}`}
                color={colors.purple}
                onClick={e => handleSelectColor(colors.purple, e)}
                name='purple'>
                <img src={checkImg} alt='check' />
              </ColorSelect>
              <ColorSelect
                className={`color blue ${selectedColorName == 'blue' ? 'active' : ''}`}
                color={colors.blue}
                onClick={e => handleSelectColor(colors.blue, e)}
                name='blue'>
                <img src={checkImg} alt='check' />
              </ColorSelect>
              <ColorSelect
                className={`color green ${selectedColorName == 'green' ? 'active' : ''}`}
                color={colors.green}
                onClick={e => handleSelectColor(colors.green, e)}
                name='green'>
                <img src={checkImg} alt='check' />
              </ColorSelect>
            </div>
            <input type='text' placeholder='Todo title' maxLength={40} ref={todoTitleInputRef} />
            <div className='buttons'>
              <button onClick={handleInitAddTodo}>Add Todo</button>
              <button onClick={handleCloseModal}>Cancel</button>
            </div>
          </TodoAddModal>
        ) : (
          <TodoEditModal>
            <input
              type='text'
              placeholder='List name'
              value={nameValue}
              onChange={() => setNameValue(listNewNameRef.current?.value as string)}
              ref={listNewNameRef}
            />
            <div className='buttons'>
              <button onClick={() => handleEditList()}>Edit title</button>
              <button onClick={() => handleCloseModal()}>Cancel</button>
            </div>
          </TodoEditModal>
        )}
      </Modal>
    </TodoSectionWrapper>
  )
}

export default TodoSection

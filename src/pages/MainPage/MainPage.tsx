import { ListAddModal, MainPageWrapper, TodoLists, Toolbar } from '@/pages/MainPage/MainPage.styles'
import { FC, useContext, useEffect, useRef, useState } from 'react'
import logoImg from '@/assets/logo.png'
import { ITodosContext } from '@/types/TodosProvider'
import { TodosContext } from '@/providers/TodosProvider'
import useModal from '@/hooks/useModal'
import Modal from '@/components/Modal/Modal'
import jakeImg from '@/assets/jake.png'
import { ITodo, ITodoList, todoListInitial } from '@/types/Todo'
import TodoSection from '@/components/TodoSection/TodoSection'
import TodoListEntry from '@/components/TodoListEntry/TodoListEntry'

const MainPage: FC = () => {
  const { todoLists, handleAddList, currentListIdx, setCurrentListIdx } =
    useContext<ITodosContext>(TodosContext)

  const [currentList, setCurrentList] = useState<ITodoList>(todoListInitial)

  const { isOpen, handleOpenModal, handleCloseModal } = useModal()

  const listNameInputRef = useRef<HTMLInputElement>(null)

  const handleAddTodosList = () => {
    const name = listNameInputRef.current?.value as string

    if (name == '') return

    handleAddList(name)
    handleCloseModal()
  }

  const getCurrentList = (id: number) => {
    const todoList: ITodoList = todoLists.find(list => list.id === id) as ITodoList
    return todoList
  }

  useEffect(() => {
    if (currentListIdx == null) return

    const todoList = getCurrentList(currentListIdx)

    if (todoList == undefined) {
      setCurrentList(todoListInitial)
      return
    }

    setCurrentList(todoList)
  }, [currentListIdx])

  return (
    <MainPageWrapper>
      <Toolbar>
        <div className='logo'>
          {/* <img src={logoImg} alt='logo' /> */}
          <span>SWEET TODO</span>
        </div>
        <TodoLists>
          <img src={jakeImg} alt='jake' />
          {todoLists.length > 0
            ? todoLists.map(list => (
                <TodoListEntry setList={setCurrentListIdx} list={list} key={list.id} />
              ))
            : null}
        </TodoLists>
        <button className='add-list' onClick={() => handleOpenModal()}>
          Add new List
        </button>
      </Toolbar>
      <div className='todos'>
        <TodoSection list={currentList} />
      </div>
      <Modal isOpen={isOpen}>
        <ListAddModal>
          <input type='text' placeholder='List name' ref={listNameInputRef} />
          <div className='buttons'>
            <button onClick={() => handleAddTodosList()}>Add List</button>
            <button onClick={() => handleCloseModal()}>Cancel</button>
          </div>
        </ListAddModal>
      </Modal>
    </MainPageWrapper>
  )
}

export default MainPage

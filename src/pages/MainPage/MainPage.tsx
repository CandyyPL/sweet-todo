import { ListAddModal, MainPageWrapper, TodoLists, Toolbar } from '@/pages/MainPage/MainPage.styles'
import { FC, useContext, useRef } from 'react'
import logoImg from '@/assets/logo.png'
import { ITodosContext } from '@/types/TodosProvider'
import { TodosContext } from '@/providers/TodosProvider'
import useModal from '@/hooks/useModal'
import Modal from '@/components/Modal/Modal'
import jakeImg from '@/assets/jake.png'

const MainPage: FC = () => {
  const { todoLists, handleAddList } = useContext<ITodosContext>(TodosContext)
  const { isOpen, handleOpenModal, handleCloseModal } = useModal()

  const listNameInputRef = useRef<HTMLInputElement>(null)

  const handleAddTodosList = () => {
    const name = listNameInputRef.current?.value as string
    handleAddList(name)
    handleCloseModal()
  }

  return (
    <MainPageWrapper>
      <Toolbar>
        <div className='logo'>
          <img src={logoImg} alt='logo' />
          <span>SWEET TODO</span>
        </div>
        <TodoLists>
          <img src={jakeImg} alt='jake' />
          {todoLists.length > 0 ? todoLists.map(list => <li>{list.name}</li>) : null}
        </TodoLists>
        <button className='add-list' onClick={() => handleOpenModal()}>
          Add new List
        </button>
      </Toolbar>
      <div className='todos'></div>
      <Modal isOpen={isOpen}>
        <ListAddModal>
          <input type='text' ref={listNameInputRef} />
          <button onClick={() => handleAddTodosList()}>Add List</button>
          <button onClick={() => handleCloseModal()}>Close</button>
        </ListAddModal>
      </Modal>
    </MainPageWrapper>
  )
}

export default MainPage

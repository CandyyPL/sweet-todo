import MainPage from '@/pages/MainPage/MainPage'
import TodosProvider from '@/providers/TodosProvider'
import { FC } from 'react'

const App: FC = () => {
  return (
    <>
      <TodosProvider>
        <MainPage />
      </TodosProvider>
    </>
  )
}

export default App

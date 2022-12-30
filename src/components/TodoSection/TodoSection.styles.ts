import { ListAddModal } from '@/pages/MainPage/MainPage.styles'
import styled from 'styled-components'

export const TodoSectionWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .todo-list {
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .empty {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: 'Nunito', sans-serif;

    span {
      font-size: 22px;

      margin-bottom: 10px;
    }

    button {
      width: 180px;
      height: 50px;

      background-color: #eee;

      border: none;
      border-radius: 40px;

      font-size: 18px;
      font-weight: bold;
      color: #111;

      cursor: pointer;

      transition: all 0.1s;

      &:hover {
        background-color: #111;
        color: #eee;
      }
    }
  }
`

export const TodoAddModal = styled(ListAddModal)`
  height: 500px;

  .colors {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`

interface IColorSelectProps {
  color: string
  name: string
}

export const ColorSelect = styled.div<IColorSelectProps>`
  width: 80px;
  height: 80px;

  background-color: ${({ color }) => `${color}`};

  border-radius: 10px;

  cursor: pointer;

  transition: all 0.2s;
  */ &:hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
  }

  &.active {
    img {
      opacity: 1;
    }
  }
`

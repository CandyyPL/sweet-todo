import { ListAddModal } from '@/pages/MainPage/MainPage.styles'
import styled from 'styled-components'

export const TodoSectionWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .todo-list {
    width: 100%;
    height: fit-content;
    max-height: 85%;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    ::-webkit-scrollbar {
      width: 25px;
    }

    ::-webkit-scrollbar-track {
      background-color: #fff;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #111;

      border: 6px solid transparent;
      border-radius: 20px;

      background-clip: content-box;
    }

    ::-webkit-scrollbar-corner {
      background-color: rgba(0, 0, 0, 0);
    }
  }

  .empty {
    width: 100%;
    height: 15%;

    margin-top: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 22px;
      font-family: 'Nunito', sans-serif;

      margin-bottom: 10px;
    }

    button {
      width: 180px;
      height: 50px;

      background-color: #eee;

      border: none;
      border-radius: 40px;
      margin-inline: 20px;

      font-size: 18px;
      font-family: 'Nunito', sans-serif;
      font-weight: bold;
      color: #111;

      cursor: pointer;

      transition: all 0.1s;

      &.edit:hover {
        background-color: #4e68d0;
        color: #eee;
      }

      &.add:hover {
        background-color: #79c15c;
        color: #eee;
      }

      &.danger:hover {
        background-color: #e13d3d;
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

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
  }

  img {
    height: 80%;

    opacity: 0;
  }

  &.active {
    img {
      opacity: 0.5;
    }
  }
`

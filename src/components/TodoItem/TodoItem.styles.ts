import { ListAddModal } from '@/pages/MainPage/MainPage.styles'
import styled from 'styled-components'

interface ITodoItemWrapperProps {
  color: string
}

export const TodoItemWrapper = styled.div<ITodoItemWrapperProps>`
  width: 95%;
  min-height: 100px;
  max-height: 100px;

  background-color: ${({ color }) => `${color}`};

  border-radius: 15px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  padding-inline: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    width: fit-content;
    max-width: 60%;
    height: fit-content;

    background-color: #eee;

    border-radius: 10px;
    padding: 5px 10px;

    font-size: 26px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #111;

    span {
      position: relative;
    }

    span::before {
      content: '';

      position: absolute;
      top: 50%;
      left: 0;

      transform: translateY(-50%);

      width: 100%;
      height: 3px;

      background-color: #111;

      transform: scaleX(0);
      transform-origin: 0%;

      transition: transform 0.2s;
    }

    &.done span::before {
      transform: scaleX(1);
    }
  }

  .status {
    font-size: 24px;
    font-family: 'Chango', sans-serif;
  }

  .buttons {
    max-width: 15%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      height: 35%;

      &:not(:first-child) {
        margin-left: 20px;
      }

      cursor: pointer;

      transition: filter 0.15s;

      &:hover {
        filter: invert();
      }
    }
  }
`

export const TodoEditModal = styled(ListAddModal)``

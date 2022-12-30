import styled from 'styled-components'

export const TodoListEntryWrapper = styled.li`
  width: 100%;
  height: 60px;

  background-color: #fee085dd;

  position: relative;
  z-index: 5;

  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: #fff;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  }
`

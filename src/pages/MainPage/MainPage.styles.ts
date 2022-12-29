import styled from 'styled-components'

export const MainPageWrapper = styled.main`
  max-width: 100vw;
  height: 100vh;

  background-color: #fbc22c;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .todos {
    width: 70%;
    height: 95%;

    background-color: #fff;

    border-radius: 25px;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.25);
  }
`

export const Toolbar = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .logo {
    width: 100%;
    height: 15%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      height: 60%;
    }

    font-size: 32px;
    font-family: 'Chango', sans-serif;
    font-weight: bold;
    color: #111;
  }

  .add-list {
    width: 90%;
    height: 12%;

    background-color: #fee085;

    border: none;
    border-radius: 10px;

    font-size: 30px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;

    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      background-color: #fff;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4);
    }
  }
`

export const TodoLists = styled.ul`
  width: 100%;
  height: 70%;

  padding: 20px;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  list-style: none;

  position: relative;

  img {
    height: 200px;

    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    opacity: 0.5;
  }

  li {
    width: 100%;
    height: 60px;

    background-color: #fee085;

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
  }
`

export const ListAddModal = styled.div`
  width: 40vw;
  height: 200px;

  background-color: #fff;

  border-radius: 20px;

  &:focus {
    outline: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: relative;

  input {
    width: 80%;
    height: 60px;

    background-color: #eee;

    border: none;
    border-radius: 10px;

    font-size: 22px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    text-align: center;

    &:focus {
      outline: none;
    }
  }

  .buttons {
    width: 80%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
      width: 22%;
      height: 50px;

      background-color: #fee085;

      border: none;
      border-radius: 10px;

      font-size: 20px;
      font-weight: 400;
      color: #000;

      cursor: pointer;

      transition: all 0.2s;

      &:hover {
        background-color: #000;
        color: #eee;
      }
    }
  }
`

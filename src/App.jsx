
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import UserForm from './components/UserForm'
import axios from 'axios'
import UserList from './components/UserList'


const BASE_URL = "https://users-crud.academlo.tech​​"

const DEFAULT_VALUEES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
}

function App() {
  const [isUserToUpdate, setIsUserToUpdate] = useState(null);

  const [isShowModal, setIsShowModal] = useState(false);

  const [users, setUsers] = useState([])

  const changeShowModal = () => setIsShowModal(!isShowModal);

  const getAllUsers = () => {
    const url = BASE_URL + "/users/"
  
    axios
      .get(url)
      .then(({data}) => setUsers(data))
      .catch((err) => console.log(err))
  };

    const createUser = (data, reset) => {
      const url = BASE_URL + "/users/"

    axios
      .post(url, data )
      .then(() => {
      getAllUsers()
      resetModalForm(reset)
    })
      .catch((err) => console.log(err))
  };
    const deleteUser = (id) => {
      const url = BASE_URL + `/users/${id}/`;

      axios
        .delete(url)
        .then(() => getAllUsers())
        .catch((err) => console.log(err))
    
    }

    const updateUser = (data, reset) => {
      const url = BASE_URL + `/users/${isUserToUpdate.id}/`;

      axios
      .patch(url, data)
      .then(() => {
        getAllUsers()
        resetModalForm(reset)
      })
      .catch((err) => console.log(err));
    }

    const resetModalForm = (reset) => {
      setIsShowModal(false);
      reset(DEFAULT_VALUEES);
      setIsUserToUpdate(null)
  }

    useEffect(() => {
      getAllUsers()
  },[])

  return (
    <main className='font-["Roboto"]'>
    <Header changeShowModal={changeShowModal}/>

    <UserForm 
      
      isShowModal={isShowModal}
      createUser={createUser}
      isUserToUpdate={isUserToUpdate}
      updateUser={updateUser}
      resetModalForm={resetModalForm}
    />

    <UserList
     users={users}
      deleteUser={deleteUser}
       changeShowModal={changeShowModal}
       setIsUserToUpdate={setIsUserToUpdate}
       />

    </main>
  )
}

export default App

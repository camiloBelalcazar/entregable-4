

const User = ({user, deleteUser, changeShowModal, setIsUserToUpdate}) => {


    const handleClickDelete = () => {
        deleteUser(user.id)
    }


    const handleClickUpdate = () => {
            changeShowModal()
            setIsUserToUpdate(user)
    }

    return (
    <article className="p-4 border-2 border-[borderColor] rounded-md flex flex-col gap-2 justify-center w-[280px] ">
        <h4>{user.first_name} {user.last_name}</h4>
        <div>
            <h5 className="text-titletext">correo</h5>
            <span>{user.email}</span>
        </div>
        <div>
            <h5 className="text-titletext">cumpleaños</h5>
            <span><i className='bx bx-gift'></i>{user.birthday || 'no encontrado'}</span>
        </div>
        <div className="flex justify-end gap-3">

        <button className="" onClick={handleClickDelete}><i className=' bx bx-trash bg-secondary text-white py-2 px-2 text-sm'></i></button>
        <button onClick={handleClickUpdate}><i className=' bx bx-pencil bg-editbuttom text-white py-2 px-2 text-sm'></i></button>
        </div>
    </article>
    
)
}

export default User

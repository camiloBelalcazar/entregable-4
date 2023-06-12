import { useEffect } from "react";
import { useForm } from "react-hook-form";


const UserForm = ({
    isShowModal,    
    createUser,
    isUserToUpdate,
    updateUser,
    resetModalForm
}) => {

    const {register, handleSubmit, reset} = useForm()

    const submit = (data) => {
        if(!data.birthday) data.birthday = null;
        if(isUserToUpdate){
            updateUser(data, reset)
        }else{
            createUser(data, reset);
        }   
    };

    const handleCloseModal = () => {
        resetModalForm(reset)
    };

    useEffect(() => {
        if(isUserToUpdate){
            reset(isUserToUpdate)
        
        }

    },[isUserToUpdate])


    return (
        <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${isShowModal ? "opasity-100 visible" : "opasity-0  invisible "}`}>

            <form onSubmit={handleSubmit(submit)} className="bg-white w-[280px] p-4 grid gap-6 relative">
                <h3 className="font-bold text-3xl">{isUserToUpdate ? "Editar ususario" : "Nuevo usuario"}</h3>

                {/* nombre */}
                <div className="grid gap-2">
                    <label className="font-bold text-sm" htmlFor="">Nombre</label>
                    <input placeholder="Ingresa tu nombre..." className="bg-gray-100 outline-none p-2" type="text" 
                    {...register('first_name')}
                    />
                </div>

                {/* Apellido */}
                <div className="grid gap-2">
                    <label className="font-bold text-sm" htmlFor="">Apellido</label>
                    <input placeholder="Ingresa tu apellido..." className="bg-gray-100 outline-none p-2"
                    type="text"
                    {...register('last_name')}
                    />
                </div>

                {/* correo */}
                <div className="grid gap-2">
                    <label className="font-bold text-sm" htmlFor="">Correo</label>
                    <input placeholder="Ingresa tu correo..." className="bg-gray-100 outline-none p-2" type="email"
                    {...register('email')}
                    />
                </div>

                {/* Contraseña */}
                <div className="grid gap-2">
                    <label className="font-bold text-sm" htmlFor="">Contraseña</label>
                    <input placeholder="Ingresa tu contraseña..." className="bg-gray-100 outline-none p-2" type="password" 
                    {...register('password')}
                    />
                </div>

                {/* Cumpleaños  */}
                <div className="grid gap-2">
                    <label className="font-bold text-sm" htmlFor="">Cumpleaños</label>
                    <input placeholder="Ingresa tu cumpleaños..." className="bg-gray-100 outline-none p-2" type="date"
                    {...register('birthday')}
                    />
                </div>
            
                <button 
                onClick={handleCloseModal} 
                type="button" 
                className="absolute top-2 right-2 text-2xl hover:text-secondary"><i className='bx bx-x'></i></button>

                <button className="btn-primary">{isUserToUpdate ? "Guardar cambios" : "Agregar nuevo usuario"}</button>
            </form>  
        </section>
    )
}

export default UserForm

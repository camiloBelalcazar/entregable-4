import User from "./User";

const UserList = ({ users, deleteUser, changeShowModal, setIsUserToUpdate }) => {
  return (
    
    <section className="  gap-6 p-4 border-2 border-[borderColor] rounded-md flex flex-wrap items-center">
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          changeShowModal={changeShowModal}
          setIsUserToUpdate={setIsUserToUpdate}
        />
      ))}
    </section>
    
    
  );
};

export default UserList;

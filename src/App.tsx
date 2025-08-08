import { useEffect, useState } from "react";
import UserCard from "./components/UserCard"
import { getUsers } from "./services/user/user.service"
import type { User } from "./services/user/user.type";
function App() {


  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center my-10">Inside Diagnosticos <span className="text-2xl font-normal">- Case técnico</span></h1>
      <section className="grid grid-cols-3 gap-4 mx-10" aria-label="usuarios registrados">
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
    </>
  )
}

export default App

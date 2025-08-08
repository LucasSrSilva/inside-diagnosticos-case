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
      <h1 className="text-4xl font-title  text-[#e13588] font-bold text-center mt-10">Inside Diagnosticos</h1>
      <h2 className="text-3xl font-normal text-center my-5">Case técnico</h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10" aria-label="usuarios registrados">
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
    </>
  )
}

export default App

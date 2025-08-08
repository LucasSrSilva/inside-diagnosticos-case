import { useEffect, useState } from "react";
import UserCard from "./components/UserCard"
import { getUsers } from "./services/user/user.service"
import type { User } from "./services/user/user.type";
import Skeleton from "./components/Skelenton";
function App() {


  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const users = await getUsers();
      setUsers(users);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="text-4xl font-title  text-[#e13588] font-bold text-center mt-10">Inside Diagnosticos</h1>
      <h2 className="text-3xl font-normal text-center my-5">Case técnico</h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto p-10" aria-label="usuarios registrados">
        {isLoading && (
          Array.from({ length: 12 }).map((_, idx) => <Skeleton key={idx} />)
        )}
        {!isLoading && hasError && (
          <div className="text-center border border-red-300 p-8 rounded-lg bg-red-100">
            <p className="text-black text-3xl font-bold mb-10">Erro ao buscar usuários</p>
            <button onClick={fetchUsers} className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800">Tentar novamente</button>
          </div>
        )}
        {!isLoading && !hasError && users.map((user: User) => <UserCard key={user.id} user={user} />)}
      </section>
    </>
  )
}

export default App

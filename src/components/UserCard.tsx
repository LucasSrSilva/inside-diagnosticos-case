import type { User } from '../services/user/user.type'

const UserCard = ({ user }: { user: User }) => {
    return (
        <div className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p>{user.address.city}</p>
        </div>
    )
}

export default UserCard

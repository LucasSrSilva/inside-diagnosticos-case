import { useState } from 'react';
import type { User } from '../services/user/user.type'

const UserCard = ({ user }: { user: User }) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div className="transition-all duration-200">

            <div className="">
                <button
                    onClick={() => toggle()}
                    className="transition duration-200 w-full text-left text-xl rounded px-4 py-3  text-gray-100 font-medium bg-gray-700 hover:bg-gray-800 flex justify-between"
                >
                    {user.name}
                    <i className={`text-lg flex items-center justify-center transition duration-200 ${open ? 'rotate-90' : 'rotate-0'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </i>
                </button>

                <div
                    className="px-4 rounded-b py-2 text-gray-800 bg-gray-200 transition-all duration-300 overflow-hidden"
                    style={{
                        maxHeight: open ? 500 : 0,
                        opacity: open ? 1 : 0,
                    }}
                >
                    <p className='text-lg font-bold mb-5'>E-mail: <span className='font-normal'>{user.email}</span></p>
                    <div className='grid grid-cols-2 gap-5 border-t border-gray-300 pt-5'>
                        <p className='font-bold text-lg'>Rua: <span className='font-normal'>{user.address.street}</span></p>
                        <p className='font-bold text-lg'>Complemento: <span className='font-normal'>{user.address.suite}</span></p>
                        <p className='font-bold text-lg'>Cidade: <span className='font-normal'>{user.address.city}</span></p>
                        <p className='font-bold text-lg'>CEP: <span className='font-normal'>{user.address.zipcode}</span></p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default UserCard

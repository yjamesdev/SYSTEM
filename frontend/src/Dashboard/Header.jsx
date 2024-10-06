import { useEffect, useState } from 'react';
import { GoBell } from 'react-icons/go';
import Drop from './Drop'

const Header = () => {
    const [username, SetUsername] = useState('');
    const [OpenProfile, SetOpenProfile] = useState(false)
    useEffect(() => {
        const LogUser = localStorage.getItem('username')
        if (LogUser){
            SetUsername(LogUser);
        }
    }, [])
  return (
    <>
      <div className='flex justify-between items-center p-4'>
        <div>
          <h1 className="text-xs">Welcome Back!</h1>
          <p className="text-xl font-semibold">{username}</p>
        </div>
        <div className="flex items-center space-x-5 ">
          <div className="hidden md:flex">
            <input
              type="text"
              placeholder="search..."
              className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-indigo-600"
            />
          </div>
          <div className="flex items-center space-x-5">
            <button type="button" className="relative text-2xl text-gray-600">
              <GoBell size={28} />
              <span className="absolute top-0 right-0 -mt-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-4 rounded-full border-2 border-white ">
                9
              </span>
            </button>
            <img
              className="w-8 g-8 rounded-full border-4 border-indigo-400 "
              src="https://randomuser.me/api/portraits/men/25.jpg"
              alt=""
              srcset=""
              onClick={() => SetOpenProfile((prev) => !prev)}
            />
          </div>
        </div>
      </div>
      {
        OpenProfile && <Drop />
      }
    </>
  );
};
export default Header;

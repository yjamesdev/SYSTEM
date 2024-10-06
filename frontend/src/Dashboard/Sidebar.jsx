import { useState } from 'react';
import { LuBox, LuUser } from 'react-icons/lu';
import { FaSuitcase } from 'react-icons/fa';
import { TbUsers } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import './assets/Sidebar.css';

const Sidebar = () => {
    const [Active, setActiveLink] = useState(0);
    const handleLinkClick = (index) => {
        setActiveLink(index)
    }
  const SidebarLink = [
    { id: 1, path: '/', name: 'Dashboard', icon: <LuBox /> },
    { id: 2, path: '/Users', name: 'Users', icon: <TbUsers /> },
    { id: 3, path: '/Clients', name: 'Client', icon: <LuUser /> },
    { id: 4, path: '/Suppliers', name: 'Suppliers', icon: <LuBox /> },
    { id: 5, path: '/Reports', name: 'Reports', icon: <LuBox /> },
    { id: 6, path: '/Accounting', name: 'Accounting', icon: <LuBox /> },
  ];

  return (
    <>
      <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4  bg-white">
            <div className="">
          <img src="/" alt="" className="w-28 hidden md:flex" />
          <img src="/" alt="" className="w-8 flex md:hidden" />
        </div>
        <ul className='mt-6 space-y-6'>
          {SidebarLink.map((link, index) => (
           <li key={link.id} className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${Active === index ? 'bg-indigo-100 text-indigo-500' : ''}`} >
              <Link to={link.path} className='flex justify-center md:justify-start items-center md:space-x-5'
              onClick={()=>handleLinkClick(index)}>
                <span>{link.icon}</span>
                <span className='text-sm text-gray-500 hidden md:flex' >{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
          <p className='flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500
          to-violet-600 rounded-full '>
            <span>?</span> <span className='hidden md:flex'>Need Help</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Sidebar;

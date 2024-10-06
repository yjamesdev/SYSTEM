import { react } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Header from './Header'

const Layout = () => {
  return <>
     <div className='flex'>
        <Sidebar />
        <div className='w-full ml-16 md:ml-56'>
            <Header />
            <Outlet/>
        </div>
     </div>
  </>;
};
export default Layout;

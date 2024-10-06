import react from 'react'
import './assets/Drop.css'
import { useNavigate } from 'react-router-dom';


const Drop = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
    };
    return <>
     <div className="flex flex-col">
       <ul className="flexx flex-col gap-4 Dropcs">
        <li className="">Profile</li>
        <li className="">Setting</li>
        <li className=''><button onClick={handleLogout} type='submit'>Logout</button></li>
       </ul>
     </div>
    </>
}

export default Drop

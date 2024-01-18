
import { Outlet } from 'react-router-dom';
import Navbar from './../Conponents/Shared/Navbar/Navbar';
import Home from '../Conponents/Pages/Home/Home';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
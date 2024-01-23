import { NavLink } from "react-router-dom";
import {  FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaOrcid, FaPaypal, FaReceipt, FaSearch, FaShoppingCart, FaStore, FaUsers, FaUtensils } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const LeftDashboard = () => {
    return (
        <div className="bg-white min-h-screen shadow-lg">
         <ul className="menu text-2xl">
          <>
<li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Point of Sale</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                <AiOutlineShoppingCart />
                                    Shopping Cart</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Payment Processing</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    User Information</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    Order Summary</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login">
                                    <FaUsers></FaUsers>
                                    Login</NavLink>
                            </li>
          </>
         
         
          

        </ul>
        </div>
    );
};

export default LeftDashboard;
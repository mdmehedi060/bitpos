import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
    
    const navlinks = (
    <>
    <li ><Link className='font-bold text-black' to='/'>Home</Link></li>
    <li ><Link className='font-bold text-black' to='/availableCamps'>Product Catalog</Link></li>
    <li ><Link className='font-bold text-black' to='/dashboard'>Dashboard</Link></li> 
</>
    );
    return (
        <div className="navbar bg-orange-200 mt my-8">
  <div className="navbar-start">
    <img className="h-[60px] w-[100px]" src="https://i.ibb.co/nwbZN8f/logo1-removebg-preview.png" alt="" />
    <a className="btn btn-ghost text-4xl font-bold">bitPOS</a>
    <div className="gap-4 flex">
    <input className="rounded-lg" type="text" />
    <button className="btn btn-active btn-neutral gap-2">Search</button>
    </div>
  </div>
  
  <div className="navbar-end flex">
    
    <div className="text-4xl">
    <AiOutlineShoppingCart />
    </div>
  <div className="dropdown">
    
      <div tabIndex={0} role="button" className="btn btn-ghost ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navlinks}
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;
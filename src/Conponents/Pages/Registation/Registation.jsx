import { Link } from 'react-router-dom';
import Picture from '../../../assets/images/bg4.avif'

const Registation = () => {
  return (
    <div>
     <div className="bg-cover bg-no-repeat" >
            <div className="max-w-screen-xl mx-auto  py-40 -mt-28 flex justify-center ">
                <div  className="card glass flex-shrink-0 w-full max-w-sm mx-auto lg:mx-0  bg-sky-200">
                    {/* <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border text-white shadow-lg shadow-pink-500/40">
                    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                        Register
                    </h3>
                </div> */}
                    <form
                       
                        className="card-body">
                        <div className="form-control">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold border-none text-white shadow-lg">Register</button>
                        </div>
                    </form>
                    <h1 className="text-center text-2xl mb-10 ">Don't have an account? <span className="text-blue-600"><Link to="/login" >Sign In</Link> </span></h1>



                </div>
            </div>
        </div>
    </div>
  );
};

export default Registation;
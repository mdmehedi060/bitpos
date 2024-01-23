import { Link } from "react-router-dom";
import Picture from '../../../assets/images/bg4.avif'
import picture from '../../../assets/images/login2.avif'
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';

const Login = () => {
  return (
    <div>
      <div  className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          
          <img className="h-[600px] shadow-lg" src={picture} alt="" />
        </div>
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-sky-200">
          <form  className="card-body">
            <div className="form-control">
            <h1 className="text-4xl font-bold">Login now!</h1>
              <label className="label">
                <span className="label-text text-2xl font-bold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl font-bold">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt  font-bold link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
            // onBlur={handleCaptcha}
                name="captcha"
                type="text"
                placeholder="Type the text above"
                className="input input-bordered"
                required
              />
             {/* <button  className="btn btn-outline btn-xs mt-2">Validate</button> */}
            </div>
            <div className="form-control mt-6">
              {/* TODO: disable captcha */}
              <input disabled={false} className="btn btn-primary" type="Submit" value="Login" />
            </div>
          </form>
          <p className='px-10 my-6 text-2xl mx-auto'><small>New Here? Please <Link className='text-blue-600' to="/signup">SignUp</Link></small></p>
          {/* <SocialLogin></SocialLogin> */}
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default Login;
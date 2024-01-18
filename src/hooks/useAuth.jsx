import { useContext } from 'react';
import { Authcontext } from '../providers/AuthProviders';



const useAuth = () => {
   const auth=useContext(Authcontext);
   return auth;
};

export default useAuth;
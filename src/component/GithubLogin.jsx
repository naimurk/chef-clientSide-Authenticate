import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { SiGithub } from "react-icons/si";

const GithubLogin = () => {
    const {githubSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

   const handleGithub = () => {

   githubSignIn()
   .then((result)=> {
    const user = result.user;
    console.log(user);
    navigate(from, { replace: true });
   })
   }
  

    return (
        <div>
             <button onClick={handleGithub} ><SiGithub></SiGithub></button>
        </div>
    );
};

export default GithubLogin;
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../component/socialLogin/SocialLogin";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
   
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
          
        signIn(data.email,data.password)
        .then(result => {
            const user = result.user ;
            console.log(user)
            
        })
        reset()
        navigate(from, { replace: true });
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}



                {/* input field 1 */}

                {/* input field 2 */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input type="email" placeholder="email" {...register("email", { required: true })} className="input bg-white input-bordered w-full max-w-xs" />
                    {errors.email && (
                        <p>email is required</p>
                    )}
                </div>
                {/* input field 3 */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">password</span>

                    </label>
                    <input type="password" placeholder="password" {...register("password", { required: true, maxLength: 6 })} className="input bg-white input-bordered w-full max-w-xs" />
                    {errors.password?.type === 'maxLength' && (
                        <p>password must have less than 6 character</p>
                    )}
                    {errors.password && (
                        <p>password is required</p>
                    )}

                </div>







                <input className="btn btn-primary" type="submit" />
            </form>

            <div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
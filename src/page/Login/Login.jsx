import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../component/socialLogin/SocialLogin";
// import { setLogLevel } from "firebase/app";
import GithubLogin from "../../component/GithubLogin";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    // const [error , setError] = useState('')
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = data => {

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                reset()
                navigate(from, { replace: true });
            })

            .catch(error => {
                setLoginError('invalid email and password')
                console.log(error);
            })
    }
    return (
        <div className=" w-full py-32 ">
            <div className=" flex justify-center mx-auto p-12 rounded-xl bg-primary w-1/2">
                
                <div className="w-1/2">
                    <h1 className="text-5xl pb-8  font-bold">login now</h1>
                    {loginError && <><p className="my-5 text-xl text-red-500">{loginError}</p></>}
                    <form className="  flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}



                        {/* input field 1 */}

                        {/* input field 2 */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input type="email" placeholder="email" {...register("email", { required: true })} className="input bg-white input-bordered w-full " />
                            {errors?.email && (
                                <p>email is required</p>
                            )}
                        </div>
                        {/* input field 3 */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">password</span>

                            </label>
                            <input type="password" placeholder="password" {...register("password", { required: true, maxLength: 6 })} className="input bg-white input-bordered w-full " />
                            {errors?.password?.type === 'maxLength' && (
                                <p>password must have less than 6 character</p>
                            )}
                            {errors.password && (
                                <p>password is required</p>
                            )}

                        </div>







                        <input className="btn text-white mt-4 " type="submit" value='log in ' />
                        <Link to={'/signUp'}><p>Create An Account <span className="text-white ">Sign UP</span></p></Link>
                    </form>

                    <div className=" w-full flex my-4 justify-center  gap-x-5">
                        <SocialLogin></SocialLogin>
                        <GithubLogin></GithubLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
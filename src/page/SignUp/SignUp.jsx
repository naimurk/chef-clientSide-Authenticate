import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import SocialLogin from "../../component/socialLogin/SocialLogin";
import GithubLogin from "../../component/GithubLogin";

const SignUp = () => {

    const { createUser, logOut, UserUpdateProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/login";

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)

                UserUpdateProfile(data.name, data.photo)
                    .then(() => {
                        reset();
                        // logout function call here 
                        logOut()
                            .then(() => { })
                            .catch(error => console.log(error))
                        navigate(from, { replace: true })
                    })





            })








    };

    return (
        <div className="my-32">
            <div className="w-1/3 mx-auto bg-primary rounded-xl p-14">
                <h1 className="text-5xl pb-8  font-bold">Sign Up Now </h1>
                <form className="flex flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}



                    {/* input field 1 */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">What is your name?</span>

                        </label>
                        <input type="text" placeholder="name" {...register("name", { required: true })} className="input bg-white input-bordered w-full " />

                    </div>
                    {/* input field 2 */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email" placeholder="email" {...register("email", { required: true })} className="input bg-white input-bordered w-full" />
                        {errors.email && (
                            <p>email is required</p>
                        )}
                    </div>
                    {/* input field 3 */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">password</span>

                        </label>
                        <input type="password" placeholder="password" {...register("password", { required: true, maxLength: 6 })} className="input bg-white input-bordered w-full" />
                        {errors.password?.type === 'maxLength' && (
                            <p>password must have less than 6 character</p>
                        )}
                        {errors.password && (
                            <p>password is required</p>
                        )}

                    </div>
                    {/* input field 4 */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">photo</span>

                        </label>
                        <input type="url" placeholder="photo url" {...register("photo", { required: true })} className="input bg-white input-bordered w-full " />

                    </div>






                    <input className="btn  mt-4" type="submit" value={'Sign Up'} />
                    <Link to={'/login'}><p>Have An Account <span className="text-white ">log in </span></p></Link>

                </form>
                <div className="flex my-3 justify-center gap-x-5">
                    <SocialLogin></SocialLogin>
                    <GithubLogin></GithubLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
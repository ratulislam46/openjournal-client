import React, { use } from 'react';
import registerLottie from '../../assets/lottie/register.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import { AuthContext } from '../../Auth/AuthProvider';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Navbar from '../../Components/Navbar/Navbar';

const Register = () => {

    const { RegisterWithFirebase, setUser, GoogleLogin } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        // verify password 
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must be at least one uppercase letter");
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password must be at least one lowercase letter");
            return;
        }
        if (!/[0-9]/.test(password)) {
            toast.error("Password must be at least one number");
            return;
        }

        RegisterWithFirebase(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Register successfully!",
                    icon: "success",
                    draggable: true
                });
                setUser(result.user)
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    const handleGoogleRegister = () => {
        GoogleLogin()
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='text-center lg:text-left'>
                        <Lottie style={{ width: '400px' }} animationData={registerLottie} loop={true}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className='text-center text-5xl font-bold pb-4'>Register Now!</h1>
                            <form onSubmit={handleRegister} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <input type="submit" value="Register" className='btn btn-natural mt-2' />
                            </form>
                            {/* Google */}
                            <div className="divider ">OR</div>
                            <button onClick={handleGoogleRegister} className="btn mt-2 bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <p>Already you have an account? <Link to='/login' className='text-blue-500 underline'>Log in</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
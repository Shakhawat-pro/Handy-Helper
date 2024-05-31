import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Context/AuthProvider';
import './navbar.css'
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import google from '../../assets/icon/google.png'



const Login = () => {
    const [activeContainer, setActiveContainer] = useState(false);
    const { createUser, signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location);
    
    useEffect(() => {
        document.title = 'Login';
    },[])

    const handleSignIn = e => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        console.log("login", email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result);
                Swal.fire({
                    title: "Success!",
                    text: "You have successfully logged In.",
                    icon: "success"
                }).then(() => {
                    // navigate('/')
         
                    {
                        location.state? navigate(location.state) : navigate('/')
                    }
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Please check your email and password and try again.',
                    footer: `<span style="color: red;">${error.message}</span>`
                });
            })
    }
    const handleSignUp = e => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const url = from.photoUrl.value
        const email = from.email.value
        const password = from.password.value
        console.log("Create", name, url, email, password);
        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: url
                }).then(result => {
                    console.log(result);
                    Swal.fire({
                        title: "Sign Up Successful!",
                        text: "Your account has been created successfully .",
                        icon: "success"
                    }).then(() => {
                        // navigate('/')
                        {
                            location.state? navigate(location.state) : navigate('/')
                        }
                    })
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Sign Up Failed',
                    text: 'Please try again later.',
                    footer: `<span style="color: red;">${error.message}</span>`
                });
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result);
            Swal.fire({
                title: "Success!",
                text: "You have successfully logged In.",
                icon: "success"
            }).then(() => {
                // navigate('/')
                {
                    location.state? navigate(location.state) : navigate('/')
                }
            })
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Please check your email and password and try again.',
                footer: `<span style="color: red;">${error.message}</span>`
            });
        })
    }



    const handleRegisterClick = () => {
        setActiveContainer(true);
    };

    const handleLoginClick = () => {
        setActiveContainer(false);
    };

    return (
        <div className='my-14 '>
            <div className={`container mx-auto ${activeContainer ? 'active' : ''} md:flex border-4 border-[#941216]  shadow-glow text-black`}>
                <div className="form-container sign-up">
                    <form onSubmit={handleSignUp}>
                        <h1 className='text-2xl font-bold text-center'>Create Account</h1>
                        <span className='text-center'>Usr your email for registration</span>
                        <input className='int mt-4' name='name' type="text" placeholder="Name" />
                        <input className='int mt-3' name='photoUrl' type="url" placeholder="Photo Url" />
                        <input className='int mt-3' name='email' type="email" placeholder="Email" />
                        <input className='int my-3' name='password' type="password" placeholder="Password" />
                        <input className='btn bg-[#ED1D24] text-white hover:bg-transparent hover:text-black hover:border-[#ED1D24] border-2 w-28' type="submit" value="Sign Up" />
                        <div className="divider divider-error">OR</div>
                        <p onClick={handleGoogleSignIn}  className='btn flex items-center bg-gray-200 border-none'>
                            <img className='w-4 md:w-6  ' src={google} /><span className='text-black'>Google</span>
                        </p>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form onSubmit={handleSignIn}>
                        <h1 className='text-2xl font-bold' >Sign In</h1>
                        <span className='text-center'>Sign in with your email & password</span>
                        <input className='int mt-8' name='email' type="email" placeholder="Email" />
                        <input className='int mt-3' name='password' type="password" placeholder="Password" />
                        <input className='btn mt-4 bg-[#ED1D24] text-white hover:bg-transparent hover:text-black hover:border-[#ED1D24] border-2 w-28' type="submit" value="Sign In" />
                        <div className="divider divider-error">OR</div>
                        <p onClick={handleGoogleSignIn}  className='btn flex items-center bg-gray-200 border-none'>
                            <img className='w-4 md:w-6  ' src={google} /><span className='text-black'>Google</span>
                        </p>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className={`toggle-panel toggle-left ${activeContainer ? '' : 'hidden'}`}>
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="btn clear-start text-[#ED1D24] bg-white font-bold" id="login" onClick={handleLoginClick}>Sign In</button>
                        </div>
                        <div className={`toggle-panel toggle-right ${activeContainer ? 'hidden' : ''}`}>
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details <br />to use all of site features</p>
                            <button className="btn clear-start text-[#ED1D24] bg-white font-bold" id="register" onClick={handleRegisterClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;


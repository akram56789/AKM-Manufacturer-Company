import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import useToken from '../../Hooks/UseToken';
import Loading from '../Shared/Loading';



const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate()
  const location = useLocation()
  const emailRef = useRef('')

  
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  
  const [token] = useToken( user || gUser)


  let from = location.state?.from?.pathname || '/'
  let signInError;

  useEffect( () =>{
    if (token) {
        navigate(from, { replace: true });
    }
}, [token, from, navigate])


  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true })

    }
  }, [user, gUser, from, navigate])

  if (loading || gLoading) {
    return <Loading></Loading>
  }

  if (error || gError) {
    signInError = <p className="text-red-500">User Not Found ❌</p>
  }

  const onSubmit = data => {

    console.log(data)
    signInWithEmailAndPassword(data.email, data.password)

  }


  // // toast area 
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      Toast.fire({
        icon: 'success',
        title: 'send email'
      })

    }
    else {
      Toast.fire({
        icon: 'success',
        title: 'please enter your email'
      })

    }

  }



  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold uppercase  ">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>



            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>

              </label>
              <input
                type="email"
                ref={emailRef}
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: 'Email is required'

                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email'
                  }
                })}
              />

              <label className="label">

                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>

              </label>
              <input
                type="password"
                className="input input-bordered  w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: 'Password is required'

                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer'
                  }
                })}

              />

              <label className="label">
                <button onClick={resetPassword}>Forget Password?</button>

                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


              </label>

            </div>


            {signInError}
            <input className='btn w-full max-w-xs text-white' type="submit" value="login" />


          </form>
          <p className='text-center'><small>New to AKM? <Link to='/Register' className='text-secondary ml-2 '>create an account</Link></small> </p>
          <div className="divider">OR</div>

          <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase">continue with 
          <img className='h-7 ml-2' src="https://img.icons8.com/nolan/344/google-logo.png" alt=""  /> 
          </button>






        </div>
      </div>

    </div>
  );
};

export default Login;

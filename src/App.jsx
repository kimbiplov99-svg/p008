import { useState } from 'react'
import './App.css'

export default function App() {

  const IMGURL = import.meta.env.BASE_URL;
  const [isLoginView, setIsLoginView] = useState(true);
  const [tooglePassword, setTooglePassword] = useState('password');
  const [toogleConfirmPassword, setToogleConfirmPassword] = useState('password');
  function switchView(){
    setIsLoginView(isLoginView === true? false:true);
  }
  function tooglePwd(e){
    setTooglePassword(tooglePassword === 'password'?'text':'password');
  }

  return (
    <div className='app'>
    {isLoginView === true&&
    <div className='login-container'>
        <img className='left-icon' src={IMGURL+'kl.jpg'} alt='kluniversity logo'/>
      <h2>Sign in with email</h2>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL+'email.jpg'} alt='Email Icon'/>
        <input type='email' placeholder='Enter your Email'/>
      </div>
     <div className='input-group'>
            <img className='left-icon' src={IMGURL + "lock.jpg"} alt='' />
            <input type={tooglePassword} placeholder='Enter your password' />
            <img className='right-icon' src={IMGURL + "eye.jpg"} alt='' onClick={()=>tooglePwd()} />
          </div>
        <button>Login</button>
      <p>Don't have an account? <label onClick={()=>switchView()}>Sign Up</label></p>
      <label className='forgot-password'>Forgot Password?</label>
    </div>
    }
    {isLoginView === false&&
    
    <div className='signup-container'>
      <h2>Register for a new account</h2>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL+'user.jpg'} alt='User Icon'/>
        <input type='text' placeholder='Full Name'/>
      </div>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL+'user.jpg'} alt='User Icon'/>
        <input type='text' placeholder='Last Name'/>
      </div>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL+'call.jpg'} alt='phone Icon'/>
        <input type='tel' placeholder='Enter Phone Number'/>
      </div>
      <div className='input-group'>
        <img className='left-icon' src={IMGURL+'email.jpg'} alt='Email Icon'/>
        <input type='email' placeholder='Enter your Email'/>
      </div>
     <div className='input-group'>
            <img className='left-icon' src={IMGURL + "lock.jpg"} alt='' />
            <input type={tooglePassword} placeholder='Enter your password' />
            <img className='right-icon' src={IMGURL + "eye.jpg"} alt='' onClick={()=>tooglePwd()} />
          </div>
        <button>Sign Up</button>
      <p>if you have account already. <label onClick={()=>switchView()}>Sign In</label></p>
      </div>
      }
    </div>
  )
}
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const AuthModal = ({setShowModal, isSignup}) => {

    const [email, setEmail] = useState(null)
    const [lowerEmail, setLowerEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmpassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            if(isSignup && password!==confirmpassword){
                setError('Passwords need to match!')
                return
            }
            setLowerEmail(email.toLowerCase())
            console.log(email, '->', lowerEmail)
            const response = await axios.post(`http://localhost:8000/${isSignup? 'signup' : 'login'}`, {email, password})

            setCookie('AuthToken', response.data.token)
            setCookie('UserId', response.data.userId)

            const success = response.status===201

            console.log(response.status)

            if(success && isSignup) navigate('/onboarding')
            if(success && !isSignup) navigate('/dashboard')

        } catch(error){
            console.log(error)
        }
    }

    const handleClick = () => {
        console.log('Clicked');
        setShowModal(false);
    }
    
    console.log(email,password,confirmpassword);

    return (
        <div className="absolute top-175 w-1/2 font-readex left-1/4 mx-auto m-10 max-w-360 bg-indigo-200 rounded-lg p-10  max-h-screen ">
            <div className='text-xl top-0 right-0 float-right text-blue-500' onClick={handleClick}><IoIosCloseCircleOutline /></div>
            <h2 className="font-readex text-2xl">{isSignup? 'CREATE ACCOUNT' : 'LOGIN'}</h2>
            <p className="font-sans text-gray-400 text-xs m-2">By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col m-8 " >
                <input className="border rounded m-2  bg-indigo-100"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className="border rounded m-2 bg-indigo-100"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignup && <input className="border rounded m-2 bg-indigo-100"
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input type="submit" className="text-gray-500 text-xs uppercase p-2 m-1 bg-indigo-100 rounded-full "/>
                <p>{error}</p>
            </form>
            <hr/>
        </div>
    )
  }
  
  export default AuthModal
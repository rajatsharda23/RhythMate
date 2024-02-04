import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";


const AuthModal = ({setShowModal, isSignup}) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmpassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            if(isSignup && password!==confirmpassword){
                setError('Passwords need to match!')
            }
            console.log('Make post request to our database')
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
        <div className="absolute top-175 w-1/2 font-readex left-1/4 mx-auto max-w-360 bg-white rounded-lg p-10 m-2 min-h-screen ">
            <div className='text-xl top-0 right-0 float-right text-blue-500' onClick={handleClick}><IoIosCloseCircleOutline /></div>
            <h2 className="font-readex text-2xl">{isSignup? 'CREATE ACCOUNT' : 'LOGIN'}</h2>
            <p className="font-sans text-gray-400 text-xs m-2">By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col m-8" >
                <input className="border rounded m-2"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className="border rounded m-2"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignup && <input className="border rounded m-2"
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input type="submit" className="text-gray-500 text-xs uppercase p-2 m-1 bg-gray-200 rounded-full "/>
                <p>{error}</p>
            </form>
            <hr/>
        </div>
    )
  }
  
  export default AuthModal
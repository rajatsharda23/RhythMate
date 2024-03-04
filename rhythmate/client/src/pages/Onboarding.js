import {useState} from 'react'
import Nav from '../components/Nav'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Onboarding = () => {
  let navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const BASE_API_ADD = process.env.REACT_APP_BASE_CALL

  const [formData, setFormData] = useState({
    user_id : cookies.UserId,
    first_name : '',
    dob_day : '',
    dob_month : '',
    dob_year : '',
    show_gender : false,
    gender_identity : 'man',
    gender_interest : 'woman',
    url : '',
    about : '',
    matches : []
  })
  
  const handleChange = (e) => {
    console.log('e')
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name] : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const response = await axios.put(`${BASE_API_ADD}/users`, { formData })
      const success = response.status===200
      console.log(response.status)
      console.log(success)
      if(success) navigate('/dashboard')
    } catch(err){
      console.log(err)
    }
    
    console.log('*****')

  }

  console.log(formData)
    return (

      <div className= "relative h-full w-screen bg-cover font-readex bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
         <Nav minimal={true} 
         setShowModal={() => {}} 
         showModal={false} 
         />

        <h2 className='flex m-8 p-8 justify-center text-center  text-3xl'>CREATE ACCOUNT</h2>
        <div className= 'flex justify-center '>
          


          <form className='m-2 p-2 border rounded border-customPink justify-center text-center ' onSubmit={handleSubmit}>
            <section className='flex flex-col mr-5 object-left'>
              <label htmlFor='first_name' className='text-xl  pt-5 border-solid rounded border-zinc-950 transition-all'>First Name</label>
              <input className= "mt-2 ml-[24%] justify-center border rounded  bg-indigo-100 text-center w-[50%]"
                id = 'first_name'
                name = 'first_name'
                type = 'text'
                placeholder ='First Name'
                required = {true}
                value = {formData.first_name}
                onChange={handleChange}
              />

              <label className='text-xl pt-5 border-solid rounded border-zinc-950 transition-all'>Birthday</label>
              <div className=''>
                <input className="border rounded m-2 bg-indigo-100 w-[15%] mr-10 "
                  id = 'dob_day'
                  name = 'dob_day'
                  type = 'number'
                  placeholder ='DD'
                  required = {true}
                  value = {formData.dob_day}
                  onChange={handleChange}
                />
                <input className="border rounded m-2 bg-indigo-100 w-[15%] mr-10"
                  id = 'dob_month'
                  name = 'dob_month'
                  type = 'number'
                  placeholder ='MM'
                  required = {true}
                  value = {formData.dob_month}
                  onChange={handleChange}
                />
                <input className="border rounded m-2 bg-indigo-100 w-[15%] mr-10"
                  id = 'dob_year'
                  name = 'dob_year'
                  type = 'number'
                  placeholder ='YYYY'
                  required = {true}
                  value = {formData.dob_year}
                  onChange={handleChange}
                />
              </div>

              <label className='text-xl pt-5 transition-all'>Gender</label>
              <div className='mt-5'>
                <input className="border rounded m-2 bg-indigo-100 hidden peer/man"
                  id = "man-gender-identity"
                  name = 'gender_identity'
                  type = 'radio'
                  value = 'man'
                  onChange={handleChange}
                  checked = {formData.gender_identity==='man'}
                />
                <label htmlFor="man-gender-identity" className='bg-indigo-100 border border-solid 
                rounded-lg border-zinc-600 transition-all p-2 m-2 hover:bg-indigo-300
                 active:border-violet-700 cursor-pointer peer-checked/man:bg-indigo-300'>Man</label>
                
                <input className="border rounded m-2 bg-indigo-100 hidden peer/woman"
                  id = 'woman-gender-identity'
                  name = 'gender_identity'
                  type = 'radio'
                  value = 'woman'
                  onChange={handleChange}
                  checked = {formData.gender_identity==='woman'}
                />
                <label htmlFor='woman-gender-identity' className='border bg-indigo-100 border-solid rounded-lg border-zinc-600 transition-all p-2 m-2  hover:bg-indigo-300 active:bg-indigo-300 active:border-violet-700 cursor-pointer peer-checked/woman:bg-indigo-300'>Woman</label>

                <input className="border rounded m-2 bg-indigo-100 hidden peer/more"
                  id = 'more-gender-identity'
                  name = 'gender_identity'
                  type = 'radio'
                  value = 'more'
                  onChange={handleChange}
                  checked = {formData.gender_identity==='more'}
                />
                <label htmlFor='more-gender-identity' className=' bg-indigo-100 border border-solid rounded-lg border-zinc-600 transition-all p-2 m-2  hover:bg-indigo-300 active:bg-indigo-300  active:border-violet-700 cursor-pointer peer-checked/more:bg-indigo-300'>More</label>
              </div>

              <div className='text-center pt-5'>
                <label htmlFor='show_gender' className='pt-5  border-solid rounded border-zinc-950 transition-all ' >Show gender on my Profile</label>
                <input className="border rounded bg-indigo-100 mt-5 ml-2 p-5 transition-all"
                    id = 'show_gender'
                    name = 'show_gender'
                    type = 'checkbox'
                    onChange={handleChange}
                    checked = {formData.show_gender}
                  />
              </div>

              <label className='text-xl pt-5 border-solid rounded border-zinc-950 transition-all'>Show Me</label>
              <div className='mt-5'>
                <input className="border rounded bg-indigo-100 hidden peer/man1"
                  id = 'man-gender-interest'
                  name = 'gender_interest'
                  type = 'radio'
                  value = 'man'
                  onChange={handleChange}
                  checked = {formData.gender_interest==='man'}
                />
                <label htmlFor='man-gender-interest' className='bg-indigo-100 border border-solid rounded-lg border-zinc-600 transition-all p-2 m-2  hover:bg-indigo-300 active:bg-indigo-300  active:border-violet-700 cursor-pointer peer-checked/man1:bg-indigo-300'>Man</label>
                
                <input className="border rounded m-2 bg-indigo-100 hidden peer/woman1"
                  id = 'woman-gender-interest'
                  name = 'gender_interest'
                  type = 'radio'
                  value = 'woman'
                  onChange={handleChange}
                  checked = {formData.gender_interest==='woman'}
                />
                <label htmlFor='woman-gender-interest' className='bg-indigo-100 border border-solid rounded-lg border-zinc-600 transition-all p-2 m-2  hover:bg-indigo-300 active:bg-indigo-300  active:border-violet-700 cursor-pointer peer-checked/woman1:bg-indigo-300'>Woman</label>

                <input className="border rounded m-2 bg-indigo-100 hidden peer/everyone"
                  id = 'everyone-gender-interest'
                  name = 'gender_interest'
                  type = 'radio'
                  value = 'everyone'
                  onChange={handleChange}
                  checked = {formData.gender_interest==='everyone'}
                />
                <label htmlFor='everyone-gender-interest' className='bg-indigo-100 border border-solid rounded-lg border-zinc-600 transition-all p-2 m-2  hover:bg-indigo-300 active:bg-indigo-300 active:border-violet-700 cursor-pointer peer-checked/everyone:bg-indigo-300'>Everyone</label>
              </div>

              <label htmlFor='about' className='text-xl mt-5 pt-5 border-solid rounded border-zinc-950 transition-all'>About Me</label>
              <input className="bg-indigo-100 border-solid rounded border-zinc-600 transition-all m-2 p-1"
                id = 'about'
                name = 'about'
                type = 'text'
                placeholder ='I love Nirvana and Foo Fighters...'
                required = {true}
                value = {formData.about}
                onChange={handleChange}
              />


            </section>

            <section className= 'flex flex-col mt-10' >
              <label htmlFor='profile' className='text-xl'>Profile Photo</label>
              <input className="border rounded m-2 p-1 bg-indigo-100"
                id = 'url'
                name = 'url'
                type = 'url'
                required = {true}
                onChange={handleChange}
              />
              <div className='rounded border-zinc-950 border-double right-0 left-0 mr-30 ml-[38%]'>
                { formData.url && <img src={formData.url} alt="Profile photo Preview" className='w-[40%] justify-center  right-0 left-0 '/>}
              </div>
            </section>

            <input type = 'submit' className= "w-[30%] border border-solid border-zinc-700 rounded-full m-2 p-2 bg-indigo-100 hover:bg-pink-300 active:bg-customPink  active:border-violet-100 cursor-pointer "/>

          </form>
        </div>
      </div>

    )
  }
  
  export default Onboarding
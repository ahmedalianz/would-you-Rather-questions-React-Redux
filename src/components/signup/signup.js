import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../redux/users/users'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

export default function Signup() {
    let { users}=useSelector(state=>state.users)
    const [newUser, setUser] = useState('')
    const [signupText, setSignupText] = useState('SIGN UP')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newUser !== '') {
            dispatch(addUser({newUser:{
                id: uuid(),
                name: newUser,
                avatarURL: 'https://www.pngarts.com/files/11/Avatar-Transparent-Images.png',
                answers:{"":""},
                questions:[]
            },users
            }
            ))
            setSignupText('Now You can Login with this userName')
            toast.info(`Welcome Aboard ${newUser}`)
        } else {
            toast.warning('Please Enter a userName')
        }
    }

    return (
        <div className="login d-flex flex-column">
            <div className="text-center">
                <div className="form-signin bg-light">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>
                        <img className="mb-4" src="https://parade.com/wp-content/uploads/2019/12/Would-You-Rather_Questions.jpg"
                            alt="would you rather?" />

                        <div className="form-floating">
                            <input value={newUser} onChange={e => setUser(e.target.value)} type="text" className="form-control"
                                id="floatingInput" />
                            <label htmlFor="floatingInput">User Name</label>
                        </div>

                        <Link to='/'>
                            <button onClick={handleSubmit} className="w-50 btn btn-lg btn-dark" type="submit">{signupText}</button>
                        </Link>
                    </form>
                </div>
            </div>
            <div className="mt-3">
                <Link to='/login'>
                    Have an account ? login
                </Link>
            </div>
        </div>
    )
}
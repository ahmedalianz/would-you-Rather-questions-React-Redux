import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {setCurrentUser} from '../../redux/users/currentUser'
import {toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    let {users}=useSelector(state=>state.users)
    const[selection,setSelection]=useState('Select User')
    const dispatch = useDispatch()

    const handleSubmit=(e)=>{
        if(selection==='Select User'){
            e.preventDefault()
            toast.warning('Please Select a User')
        }else{
            const user=users.find(u=>u.name===selection)
            dispatch(setCurrentUser(user))
            // sessionStorage.setItem('isLoggedIn',true)
            // sessionStorage.setItem('currentUser',JSON.stringify(user))
        }
    }

    return (
    <div className="login d-flex flex-column">
        <div className="text-center">
            <div className="form-signin bg-light">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <img className="mb-4" src="https://parade.com/wp-content/uploads/2019/12/Would-You-Rather_Questions.jpg" alt="would you rather?"/>
        
                    <div className="form-floating">
                        <select value={selection} onChange={(e)=>{setSelection(e.target.value)}}>
                                <option value="Select User" disabled>Select User...</option>
                                {users && users.map(u=>(
                                    <option value={u.name} key={u.id}>{u.name}</option>
                                ))}
                        </select>
                    </div>            
                    <button onClick={handleSubmit} className="w-50 btn btn-lg btn-dark" type="submit">Sign in</button>
                </form>
            </div>
        </div>
        <div className="mt-3">
        <Link to='/signup'>
        Need to create a new account ? SignUp
        </Link>
        </div>
    </div>
    )
}

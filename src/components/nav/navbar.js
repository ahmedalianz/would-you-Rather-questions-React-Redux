import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logOut} from '../../redux/users/currentUser'
import './nav.css'
export default function Navbar() {
    const currentUser =useSelector(state => state.currentUser.user)
    const[loggedUser,setLoggedUser]=useState('')
    const[logoutClass,setLogOutClass]=useState('buttonDisappear')
    const dispatch = useDispatch() 
    useEffect(()=>{
        if(currentUser!==null){
            setLoggedUser(
            <span>
                Welcome {currentUser.name}
                <img className="profile-avatar" src={currentUser.avatarURL} alt='avatar'/>
            </span>)
            setLogOutClass('buttonAppear')
        }else{
            setLoggedUser(``)
            setLogOutClass('buttonDisappear')
            sessionStorage.setItem('isLoggedIn', false)
        }
    },[currentUser])
    const handleLogout=()=>{
        sessionStorage.clear()
        dispatch(logOut())
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand">Would you Rather?</span>

                <button className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">New Question</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/leaderboard">LeaderBoard</Link>
                        </li>
                        <div className='user-profile'>
                        <li className="nav-item">
                            <span className="nav-link">{loggedUser}</span>
                        </li>
                        <li className="nav-item">
                            <Link to='/'>
                            <button onClick={handleLogout} className={`${logoutClass} btn btn-danger`}>Log Out</button>
                            </Link>
                        </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

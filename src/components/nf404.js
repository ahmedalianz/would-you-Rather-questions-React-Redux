import React from 'react'
import { Link } from 'react-router-dom'
export default function Nf404() {
    return (
        <div className="notfound d-flex flex-column align-items-center">
            <Link to='/'>
            <button className="btn btn-primary btn-lg btn-block">Back Home</button>
            </Link>
            <img style={{ width:'100%'}} src='./images/404.gif'/>
        </div>
    )
}

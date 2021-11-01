import React,{useEffect} from 'react'
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom'
import Login from './login/login'
import Signup from './signup/signup'
import Navbar from './nav/navbar'
import Home from './main/home/home'
import Poll from './main/home/common/poll'
import NewQuestion from './main/newquestion/newquestion'
import LeaderBoard from './main/leaderboard/leaderboard'
import { useDispatch, useSelector } from 'react-redux'
import {getUsers} from '../redux/users/users'
import {getQuestions} from '../redux/questions/unansweredq'
import {setCurrentUser} from '../redux/users/currentUser'
export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
        dispatch(getQuestions())
    },[dispatch])

    const isLoggedIn = sessionStorage.getItem('isLoggedIn')
    let {user}=useSelector(state=>state.currentUser)
    useEffect(() => {
        if (isLoggedIn) {
            user = JSON.parse(sessionStorage.getItem('currentUser'))
            dispatch(setCurrentUser(user))
        }
    }, [isLoggedIn])

    return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path='/' exact>
                {user? <Home/> :<Login/>}
            </Route>
            <Route path='/login' exact>
                {user? <Home/> :<Login/>}
            </Route>
            <Route path='/signup'>
            {user? <Home/> :<Signup/>}
            </Route>
            <Route path='/polls/:id'>
                {user?<Poll/>:<Login/>}
            </Route>
            <Route path='/newquestion'>
                {user?<NewQuestion/>:<Login/>}
            </Route>
            <Route path='/leaderboard'>
                {user?<LeaderBoard/>:<Login/>}
            </Route>
            <Redirect to='/'/>
        </Switch>
        
     </BrowserRouter>

    )
}
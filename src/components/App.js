import React,{useEffect} from 'react'
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom'
import Login from './login/login'
import Signup from './signup/signup'
import Navbar from './nav/navbar'
import Home from './main/home/home'
import Poll from './main/home/common/poll'
import NewQuestion from './main/newquestion/newquestion'
import LeaderBoard from './main/leaderboard/leaderboard'
import Nf404 from './nf404'
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

    let {user}=useSelector(state=>state.currentUser)
    return (
    <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path='/' exact>
                {user? <Home/> :<Login/>}
            </Route>
            <Route path='/login'>
                {user? <Home/> :<Login/>}
            </Route>
            <Route path='/signup'>
            {user? <Home/> :<Signup/>}
            </Route>
            <Route path='/questions/:id'>
                {user?<Poll/>:<Login/>}
            </Route>
            <Route path='/add'>
                {user?<NewQuestion/>:<Login/>}
            </Route>
            <Route path='/leaderboard'>
                {user?<LeaderBoard/>:<Login/>}
            </Route>
            <Route path='/notfound404' component={Nf404}/>
            <Redirect to='/notfound404'/>
        </Switch>
        
     </BrowserRouter>
    )
}

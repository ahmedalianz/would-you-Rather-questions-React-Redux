import React,{useState} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {addQuestion} from '../../../redux/questions/unansweredq'
import { v4 as uuid } from 'uuid'
import { setCurrentUser } from '../../../redux/users/currentUser'
import { setUsers } from '../../../redux/users/users'
import { useHistory } from "react-router-dom";
export default function NewQuestion() {
  const [option1,setOption1]=useState('')
  const [option2,setOption2]=useState('')
    const dispatch = useDispatch()
    const {questions} = useSelector(state => state.questions)
    const {user} = useSelector(state => state.currentUser)
    const {users}=useSelector(state => state.users)
    let history = useHistory()
  const handleSubmit=(e)=>{
    e.preventDefault()
    let newID=uuid()
    let newQuestion={
      id:newID,
      author:user.id,
      timestamp:Date.now(),
      optionOne:{
        votes:[],
        text:option1
      },
      optionTwo:{
        votes:[],
        text:option2
      }
    }
    const editedUser=Object.assign({},user,{questions:[...user.questions,newID]})
    dispatch(addQuestion({questions,newQuestion}))
    dispatch(setCurrentUser(editedUser))
    let userIndex=users.indexOf(user)
    let editedUsers=Object.assign({},users,{[`${userIndex}`]:editedUser})
    dispatch(setUsers(Object.values(editedUsers)))
    history.push("/");
  }
    return (
            <div className="card text-left">
    <h4 className="card-title mt-2 ms-2">Would You Rather ?</h4>
  <img className="card-img-top" src="https://codewithivy.com/wp-content/uploads/2020/12/ask-questions.png" alt=""/>
  <div className="card-body">
    <div className="card-text">
    <form onSubmit={handleSubmit}>
<div className="form-group">
  <label htmlFor="option1" className="form-label">Option 1</label>
  <input required type="text" id='option1'
    className="form-control"
    value={option1}
    onChange={e=>setOption1(e.target.value)}
    placeholder="Option1"/>
</div>
<div className="form-group">
  <label htmlFor="option2" className="form-label">Option 2</label>
  <input required type="text" id='option2'
    className="form-control"
    value={option2}
    onChange={e=>setOption2(e.target.value)}
    placeholder="Option2"/>
</div >
<div className='d-flex justify-content-end'>
<button className="btn btn-primary mt-2 me-2" type='submit'>Add Question</button>
</div>
</form>
    </div>
  </div>
</div>
    )
}

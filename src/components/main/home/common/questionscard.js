import React from 'react'
import Question from './question'
import {useSelector} from 'react-redux'

export default function QuestionsCard({question}) {
    let {users}=useSelector(state=>state.users)
    let asker=users.find(user =>user.id === question.author)
return (
<div className="card" style={{width:'20rem'}}>
    <div className="d-flex align-items-center">
    <img className="q-avatar me-2" src={asker.avatarURL}/>
    <h4><span>{asker.name}</span>{" "}asks</h4>
    </div>
    <div className="card-body">
        <Question question={question}/>
    </div>
</div>
)
}
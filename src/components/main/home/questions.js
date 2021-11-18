import React from 'react'
import {useSelector} from 'react-redux'
import QuestionsCard from './common/questionscard'
export default function Unanswered({change,otherPage}) {
const {questions }= useSelector(state => state.questions)
//getting all questions ids
let questionsIds=questions.map(q => q.id)
const {user}=useSelector(state=>state.currentUser)
//getting the answered questions ids for the current user
let userAnswerIds=Object.keys(user.answers)
//getting the un answered questions ids for the current user
const unAnswered_Questions_Ids_ForUser=questionsIds.filter(e=>!userAnswerIds.includes(e))
//getting the un answered questions objects for the current user
const unAnswered_Questions=questions.filter(q=>unAnswered_Questions_Ids_ForUser.includes(q.id))
//getting the answered questions ids for the current user
const answered_Questions_Ids_ForUser=questionsIds.filter(e=>userAnswerIds.includes(e))
//getting the  answered questions objects for the current user
const answered_Questions=questions.filter(q=>answered_Questions_Ids_ForUser.includes(q.id))

    return otherPage==='Answered Questions'?(
        <div className="d-flex flex-column">
            <button className="btn btn-primary mt-4 " onClick={change}>Go to{" "}{otherPage}</button>
                {unAnswered_Questions.sort(function(a,b){
                    return a.timestamp -b.timestamp
                }).map(question =>(
                    <QuestionsCard
                    key={question.id}
                    question={question}
                    />
                ))}
        </div>
    ):(
        <div className="d-flex flex-column">
            <button className="btn btn-primary mt-4 " onClick={change}>Go {" "}{otherPage}</button>
            {answered_Questions.sort(function(a,b){
                    return a.timestamp -b.timestamp
                }).map(question =>(
                    <QuestionsCard
                    key={question.id}
                    question={question}
                    />
                ))}
</div>
    )
}

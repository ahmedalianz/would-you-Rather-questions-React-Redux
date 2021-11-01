import React from 'react'
import Question from './question'

export default function QuestionsCard({asker,questions}) {
//arranging the questions to show in each asker section
const filterd_Questions=questions.filter(q=>q.author===asker.id)

return filterd_Questions.length>0?(
<div className="card" style={{width:'20rem'}}>
    <img src={asker.avatarURL} className="card-img-top avatar-q" alt="avatar" />
    <div className="card-body">
        <h5 className="card-title">Questions by {asker.name}</h5>
        {filterd_Questions.map((question)=>(
        <Question key={question.id} question={question} />
        ))}
    </div>
</div>
):(
    ''
)
}
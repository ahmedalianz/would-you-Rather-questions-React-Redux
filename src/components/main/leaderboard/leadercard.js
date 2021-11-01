import React from 'react'

export default function LeaderCard({user}) {
    return (
<div className="card" style={{width:'20rem'}}>
        <h5 className="card-title mt-2 ms-2">{user.name}</h5>
    <img src={user.avatarURL} className="card-img-top avatar-q" alt="avatar" />
    <hr/>
    <div className="card-body">
        <span>Answered questions</span>
        <span style={{color:'red',paddingLeft:'10px'}}>{Object.keys(user.answers).length}</span>
        <br/>
        <span>Created questions</span>
        <span style={{color:'red',paddingLeft:'10px'}}>{user.questions.length}</span>
        <br/>
        <span>Score</span>
        <span style={{color:'red',paddingLeft:'10px'}}>{user.questions.length+Object.keys(user.answers).length}</span>
    </div>
</div>
    )
}

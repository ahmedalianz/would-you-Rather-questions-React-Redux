import React from 'react'
import {useSelector} from 'react-redux'
import LeaderBoardCard from './leadercard'
export default function LeaderBoard() {

    let {users}=useSelector(state=>state.users)
return (
        <div className="d-flex flex-column">
                {[...users].sort(function(a,b){
                    return (b.questions.length+Object.keys(b.answers).length) - (a.questions.length+Object.keys(a.answers).length ) 
                }).map(u =>(
                    <LeaderBoardCard
                    key={u.id}
                    user={u}
                    />
                ))}
        </div>
    )
}

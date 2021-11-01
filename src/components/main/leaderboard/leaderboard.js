import React from 'react'
import {useSelector} from 'react-redux'
import LeaderBoardCard from './leadercard'
export default function LeaderBoard() {
    let {users}=useSelector(state=>state.users)
const {questions }= useSelector(state => state.questions)

    return (
        <div className="d-flex flex-column">
                {users.map(u =>(
                    <LeaderBoardCard
                    key={u.id}
                    user={u}
                    />
                ))}
        </div>
    )
}

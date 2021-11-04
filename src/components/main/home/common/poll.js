import React,{useState} from 'react'
import Loader from "react-loader-spinner";
import { useSelector,useDispatch } from 'react-redux'
import {setUsers} from '../../../../redux/users/users'
import {setCurrentUser} from '../../../../redux/users/currentUser'
// import { setQuestions } from '../../../../redux/questions/unansweredq';
import { useParams, Link } from 'react-router-dom';
export default function Poll() {
    let {user}=useSelector(state=>state.currentUser)
    let {questions}=useSelector(state=>state.questions)
    //getting the answered questions ids for the current user
    let userAnswerIds=Object.keys(user.answers)
    const { id } = useParams()
    //getting the choice of the current poll of the current user
    let choiceIndex=userAnswerIds.indexOf(id)
    let choice=Object.values(user.answers)[choiceIndex]
    const poll = questions.find(question => question.id === id)
    if(!poll){window.location.assign('/')}
    const { users } = useSelector(state => state.users)
    let asker = users.find(u => u.id === poll.author)
    const [result,setResult]=useState('')
    const [value,setValue]=useState('optionOne')
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(value==='optionOne'){
            setResult('optionOne')
            // const {optionOne,...others}=poll
            // let editedQuestion=Object.assign({},
            //     poll.optionOne,
            //     {votes:[...poll.optionOne.votes,user.id]}
            //     )
            // let editedQuestions=Object.assign({},
            //     questions,{[`${questions.indexOf(poll)}`]:{
            //         ...others,optionOne:editedQuestion
            //     }})
            // dispatch(setQuestions(Object.values(editedQuestions)))
        }else{
            setResult('optionTwo')
            // const {optionTwo,...others}=poll
            // let editedQuestion=Object.assign({},
            //     poll.optionTwo,
            //     {votes:[...poll.optionOne.votes,user.id]}
            //     )
            // let editedQuestions=Object.assign({},
            //     questions,{[`${questions.indexOf(poll)}`]:{
            //         ...others,optionTwo:editedQuestion
            //     }})
            // dispatch(setQuestions(Object.values(editedQuestions)))
        }
            // (trying to modify the user directrly throws an error)
            //adding the poll answer to the user answers in a new object
            let newAnswers=Object.assign({},user.answers,{[`${id}`]:value})
            let editedUser=Object.assign({},user,{answers:newAnswers})
            dispatch(setCurrentUser(editedUser))
            let userIndex=users.indexOf(user)
            let editedUsers=Object.assign({},users,{[`${userIndex}`]:editedUser})
            dispatch(setUsers(Object.values(editedUsers)))
    }
    const value1=poll.optionOne.votes.length;
    const value2=poll.optionTwo.votes.length;
    const total=value1+value2
return questions ? (<>
    <div className="card">
        <img src={asker.avatarURL} className="card-img-top avatar-q" alt="avatar" />
        <div className="card-body">
            {result==='' && !userAnswerIds.includes(id)?(<>
                <h5 className="card-title">Would You Rather ?</h5>
                <div onChange={(e)=>setValue(e.target.value)}>
                    <div className="form-check">
                        <input className="form-check-input" value="optionOne" id="option1" defaultChecked type="radio" name="answer" />
                        <label className="form-check-label" htmlFor="option1">
                            {poll.optionOne.text}
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" value="optionTwo" id="option2" type="radio" name="answer" />
                        <label className="form-check-label" htmlFor="option2">
                            {poll.optionTwo.text}
                        </label>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" onClick={handleSubmit} className="btn btn-success btn-lg btn-block">
                            Submit</button>
                    </div>
                </div>
            </>
            ):(
            <>
                <h5 className="card-title">Results</h5>
                <div>
                    <div>
                        {result==="optionOne" || choice==="optionOne"?(
                        <div className='chosen-option'>
                            <span>Would You Rather ? </span>{poll.optionOne.text} <span className='badge-choice'>Your choice</span>
                        </div>
                        ):(
                        <div>
                            <span>Would You Rather ? </span>{poll.optionOne.text}
                        </div>
                        )}
                        <span className='d-flex justify-content-center'>
                            {value1}
                            <span>out of</span>
                            {total}
                            <span>Votes</span>
                        </span>
                        <div className='progress-barz'>
                            <span>{value1/total*100}%</span>
                        <progress 
                        value={value1} 
                        max={total}>
                            </progress>
                            </div>
                        <hr/>
                    </div>
                    <div>
                        {result==="optionTwo" || choice==="optionTwo"?(
                        <div className='chosen-option'>
                            <span>Would You Rather ? </span>{poll.optionTwo.text} <span className='badge-choice'>Your choice</span>
                        </div>
                        ):(
                        <div>
                            <span>Would You Rather ? </span>{poll.optionTwo.text}
                        </div>
                        )}
                        <span className='d-flex justify-content-center'>
                            {value2}
                            <span> out of </span>
                            {total}
                            <span>Votes</span>
                        </span>
                        <div className='progress-barz'>
                            <span>{value2/total*100}%</span>
                        <progress 
                        value={value2} 
                        max={total}>
                            </progress>
                            </div>

                    </div>
                </div>
            </>
            )
            }
        </div>
    </div>
    <Link to='/'>
    <button className="btn btn-primary btn-lg btn-block">
        Back to Questions</button>
    </Link>
</>
) : (
        <Loader 
        type="Oval"
        color="#00BFFF" 
        height={30} 
        width={30} />
)
}
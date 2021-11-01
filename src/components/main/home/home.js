import React,{useState} from 'react'
import Questions from './questions'
import './home.css'
export default function Home() {
    const[page,setPage] = useState(1)
    const nextPage=()=>{
        setPage(page+1)
    }
    const prevPage=()=>{
        setPage(page-1)
    }
        switch(page){
            case 1:
                return(
                    <Questions
                     change={nextPage}
                     otherPage='Answered Questions'
                    />
                )
            case 2:
                return(
                    <Questions
                    change={prevPage}
                    otherPage='Unanswered Questions'
                    />
                )
            default:
                return(
                    <Questions
                    change={nextPage}
                    otherPage='Answered Question'
                    />
                )
            }
}

import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {_getQuestions} from '../_DATA'
export const getQuestions=createAsyncThunk(
    'questions/getQuestions',
    async ()=>{
        let res=await _getQuestions()
        return Object.values(res)
    }
)
const questionsSlice=createSlice({
    name:'questions',
    initialState:{
        questions:[],
        status:null
    },
    reducers:{
        setQuestions:(state, action)=>{
                state.questions=action.payload
            },
        addQuestion:(state, action)=>{
            state.questions=[...action.payload.questions,action.payload.newQuestion]
        }
    },
    extraReducers:{
        [getQuestions.pending]:(state)=> {
            state.status='loading'
        },
        [getQuestions.fulfilled]:(state,action)=> {
            state.status='success'
            state.questions=action.payload
        },
        [getQuestions.rejected]:(state)=> {
            state.status='failed'
        }

    }
})
export default questionsSlice.reducer
export const {addQuestion,setQuestions}=questionsSlice.actions

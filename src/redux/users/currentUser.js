import {createSlice} from '@reduxjs/toolkit'
const currentUserSlice=createSlice({
    name:'currentUser',
    initialState:{
        userName:'Select User',
        user:null
    },
    reducers:{
        setCurrentUser:(state,action) => {
            state.user=action.payload
        },
        logOut:(state) =>{
            state.user=null
        }
    }
})
export default currentUserSlice.reducer
export const {setCurrentUser,logOut} = currentUserSlice.actions
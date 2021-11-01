import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {_getUsers} from '../_DATA'
export const  getUsers=createAsyncThunk(
    'users/getUsers',
    async ()=> {
        let res=await _getUsers()
        return Object.values(res)
    }
)

const usersSlice=createSlice({
    name:'users',
    initialState:{
        users:[],
        status:null
    },
    reducers:{
        addUser:(state,action)=>{
            state.users=[...action.payload.users,action.payload.newUser]
        }
    },
    extraReducers:{
        [getUsers.pending]:(state)=> {
            state.status='loading'
        },
        [getUsers.fulfilled]:(state,action)=> {
            state.status='success'
            state.users=action.payload
        },
        [getUsers.rejected]:(state)=> {
            state.status='failed'
        }
    }
})
export default usersSlice.reducer
export const {addUser}=usersSlice.actions
import { 
    createSlice,
 } from '@reduxjs/toolkit';
import { signUpUser } from '../actions/authActions';



const initialState = {
    message:"",
    user:"",
    token:"",
    loading:false,
    error:""
}

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
       
    },
    extraReducers:{
        [signUpUser.pending]:(state, action)=>{
            state.loading = true;
        },
        [signUpUser.fulfilled]:(state, {payload: error, message})=>{
            state.loading = false;
            if(error){
                state.error = error

            }else{
                state.message = message
            }
        },
        [signUpUser.rejected]:(state, action)=>{
            state.loading = true;
        }
    }

})
export default userSlice.reducer

export const userSelector = (state)=>state.users
import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../../Actions/authActions'


// initialize userToken from local storage
const userToken = sessionStorage.getItem('userToken')


const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
        state.userInfo = payload
    }
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // register user reducer...
  },
})

export const { setCredentials } = authSlice.actions
export default authSlice.reducer

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const backendURL = 'https://awesmatic.vistamatrix.in/api'


export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors'
      }
      const { data } = await axios.post(
        `${backendURL}/customer/login`,
        { email, password },
        config
      )
      // store user's token in local storage
      sessionStorage.setItem('userToken', data.access_token)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
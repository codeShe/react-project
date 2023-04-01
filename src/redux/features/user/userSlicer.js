import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {}
  },
  reducers: {
    setUser: (state,action) => {
      // console.log(state, action,'dispath_setUser')
      return action.payload
    }
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer


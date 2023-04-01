import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {}
  },
  reducers: {
    setUser: (action,state) => {
      // console.log(state, action,'dispath_setUser')
      return state
    }
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer


import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlicer'

export default configureStore({
  reducer: {
    user:userReducer
  }
})
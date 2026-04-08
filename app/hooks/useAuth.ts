import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import { loginStart, loginSuccess, loginFailure, logout, signupStart, signupSuccess, signupFailure } from '../features/auth/authSlice'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = <T>(selector: (state: RootState) => T) => useSelector(selector)

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const { user, isAuthenticated, loading } = useAppSelector((state) => state.auth)

  const login = async (email: string, password: string) => {
    dispatch(loginStart())
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      const mockUser = {
        id: '1',
        name: email.split('@')[0],
        email,
      }
      dispatch(loginSuccess(mockUser))
      return { success: true }
    } catch (error) {
      dispatch(loginFailure())
      return { success: false, error: 'Login failed' }
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    dispatch(signupStart())
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      const mockUser = {
        id: Date.now().toString(),
        name,
        email,
      }
      dispatch(signupSuccess(mockUser))
      return { success: true }
    } catch (error) {
      dispatch(signupFailure())
      return { success: false, error: 'Signup failed' }
    }
  }

  const logoutUser = () => {
    dispatch(logout())
  }

  return {
    user,
    isAuthenticated,
    loading,
    login,
    signup,
    logout: logoutUser,
  }
}

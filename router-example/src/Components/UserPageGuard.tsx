import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { UserPage } from './UserPage'

type UserData = { user?: { authenticated: boolean }}

export const UserPageGuard: FC<UserData> = ({ user }) => (
  user && user.authenticated
    ? <UserPage />
    : <Navigate to="/login" />
)

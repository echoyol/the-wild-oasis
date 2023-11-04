import styled from 'styled-components'
import useUser from '../features/authentication/useUser'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const fullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`
function ProtectedRoutes({ children }) {
  const navigate = useNavigate()

  //1. Load the authenticated user
  const { user, isLoading, isAuthenticated } = useUser()

  //3. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login')
    },
    [isLoading, isAuthenticated]
  )

  //2. While loading, show a spinner
  if (isLoading)
    return (
      <fullPage>
        <Spinner />
      </fullPage>
    )

  //4. If there IS a user, render the app
  return children
}

export default ProtectedRoutes

import { styled } from '@tanstack/react-query-devtools/build/lib/utils'
import useUser from '../features/authentication/useUser'
import Spinner from './Spinner'

const fullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`
function ProtectedRoutes({ children }) {
  //1. Load the authenticated user
  const { user, isLoading } = useUser()

  //2. While loading, show a spinner
  if (isLoading)
    return (
      <fullPage>
        <Spinner />
      </fullPage>
    )
  //3. If there is NO authenticated user, redirect to the /login

  //4. If there IS a user, render the app
  return { children }
}

export default ProtectedRoutes

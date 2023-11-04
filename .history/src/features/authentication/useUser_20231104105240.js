import { useQuery } from '@tanstack/react-query'
import { getCurrentUser } from '../../services/apiAuth'

function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  })
  return <div>useUser</div>
}

export default useUser

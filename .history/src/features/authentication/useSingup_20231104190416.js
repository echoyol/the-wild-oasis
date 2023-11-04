import { useMutation } from '@tanstack/react-query'
import { signup as signupApi } from '../../services/apiAuth'
import toast from 'react-hot-toast'

function useSingup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user)
      toast.success(
        "Account successfully created! Please vertify the new account from the user's email address"
      )
    },
  })
  return <div>useSingup</div>
}

export default useSingup

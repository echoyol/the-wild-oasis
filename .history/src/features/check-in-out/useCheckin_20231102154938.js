import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function useCheckin() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'checked-in',
        isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`Book ing #${data.id} successfully checked in`)
      queryClient.invalidateQueries({ active: true })
      navigate('/')
    },

    onError: () => toast.error('There was an error while checking in'),
  })
  return { checkin, isCheckingIn }
}

export default useCheckin

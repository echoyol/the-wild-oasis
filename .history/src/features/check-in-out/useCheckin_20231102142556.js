import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'

function useCheckin() {
  const queryClient = useQueryClient()
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'check-in',
        isPaid: true,
      }),
    onSuccess: (data) => {
      toast.success(`Booing #${data.id} successfully checked in`)
      queryClient.invalidateQueries({ active: true })
    },
  })
  return <div>useCheckin</div>
}

export default useCheckin

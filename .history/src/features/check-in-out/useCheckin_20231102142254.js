import { useMutation } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'

function useCheckin() {
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: 'check-in',
        isPaid: true,
      }),
  })
  return <div>useCheckin</div>
}

export default useCheckin

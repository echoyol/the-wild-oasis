import { useQuery } from '@tanstack/react-query'
import { getCabins } from '../../services/apiCabins'
import { getBooking } from '../../services/apiBookings'
import { useParams } from 'react-router-dom'

export function useBookng() {
  const { bookingId } = useParams()

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking'],
    queryFn: () => getBooking(bookingId),
  })

  return { isLoading, error, booking }
}
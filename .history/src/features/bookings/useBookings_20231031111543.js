import { useQuery } from '@tanstack/react-query'
import { getBookings } from '../../services/apiBookings'
import { useSearchParams } from 'react-router-dom'

export function useBookings() {
  const [searchParams] = useSearchParams()

  //FILTER
  const filterValue = searchParams.get('status')
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: getBookings,
  })

  return { isLoading, error, bookings }
}

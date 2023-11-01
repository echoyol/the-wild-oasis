import { useQuery } from '@tanstack/react-query'
import { getBookings } from '../../services/apiBookings'
import { useSearchParams } from 'react-router-dom'

export function useBookings() {
  const [searchParams] = useSearchParams()

  //FILTER
  const filterValue = searchParams.get('status')
  // const filter =
  //   !filterValue || filterValue === 'all'
  //     ? null
  //     : { field: 'status', value: filterValue }
  const filter = { field: 'status', value: 'check-in' }
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: () => getBookings({ filter }),
  })

  return { isLoading, error, bookings }
}
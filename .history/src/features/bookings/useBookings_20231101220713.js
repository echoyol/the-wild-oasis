import { useQuery } from '@tanstack/react-query'
import { getBookings } from '../../services/apiBookings'
import { useSearchParams } from 'react-router-dom'

export function useBookings() {
  const [searchParams] = useSearchParams()

  //FILTER
  const filterValue = searchParams.get('status')
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'status', value: filterValue }

  //SORT
  const sortByRow = searchParams.get('sortBy') || 'startDate-desc'
  const [field, direction] = sortByRow.split('-')
  const sortBy = { field, direction }

  //Pagination
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'))

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  })

  // const bookings = data?.data || []
  return { isLoading, error, bookings, count }
}

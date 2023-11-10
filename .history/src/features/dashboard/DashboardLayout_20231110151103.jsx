import styled from 'styled-components'
import { useRecentBookings } from './useRecentBookings'
import { useRecentStays } from './useRecentStays'
import Spinner from '../../ui/Spinner'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings()
  const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStays()

  if (isLoading1) return <Spinner />

  console.log(bookings)

  return (
    <StyledDashboardLayout>
      <div>1</div>
      <div>11</div>
      <div>111</div>
      <div>1111</div>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout

import Stat from './Stat'
import { HiOutlineBriefcase } from 'react-icons/hi2'
function Stats({ bookings, confirmedStays }) {
  //1. number of bookings
  const numBookings = bookings.length

  return (
    <>
      <Stat
        title='Bookings'
        color='blue'
        icon={<HiOutlineBriefcase />}
      />
      <Stat />
      <Stat />
      <Stat />
    </>
  )
}

export default Stats

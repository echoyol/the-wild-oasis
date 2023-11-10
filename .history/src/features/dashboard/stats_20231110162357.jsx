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
        value={numBookings}
      />
      <Stat
        title='Sales'
        color='blue'
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title='check ins'
        color='blue'
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title='Occupancy rate'
        color='blue'
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
    </>
  )
}

export default Stats

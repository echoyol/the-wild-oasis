import { formatCurrency } from '../../utils/helpers'
import Stat from './Stat'
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from 'react-icons/hi2'

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  //1. number of bookings
  const numBookings = bookings.length

  //2.total sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)

  //3.
  const checkins = confirmedStays.length

  //4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount)
  // num checked in nights /all available nights(num days *num cabins)
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
        color='green'
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title='check ins'
        color='indigo'
        icon={<HiOutlineCalendar />}
        value={checkins}
      />
      <Stat
        title='Occupancy rate'
        color='yellow'
        icon={<HiOutlineChartBar />}
        value={numBookings}
      />
    </>
  )
}

export default Stats

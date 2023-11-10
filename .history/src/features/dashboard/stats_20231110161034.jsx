import Stat from './Stat'

function Stats({ bookings, confirmedStays }) {
  //1. number of bookings
  const numBookings = bookings.length

  return (
    <>
      <Stat />
      <Stat />
      <Stat />
      <Stat />
    </>
  )
}

export default Stats

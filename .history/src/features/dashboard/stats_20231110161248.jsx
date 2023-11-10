import Stat from './Stat'

function Stats({ bookings, confirmedStays }) {
  //1. number of bookings
  const numBookings = bookings.length

  return (
    <>
      <h1>Hello</h1>
      <Stat />
      <Stat />
      <Stat />
      <Stat />
    </>
  )
}

export default Stats

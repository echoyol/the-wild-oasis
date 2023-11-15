import styled from 'styled-components'
import TodayItem from '../features/check-in-out/TodayItem'

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`

function TodayActivityList({ activities }) {
  return activities?.length > 0 ? (
    <TodayList>
      {activities.map((activity) => (
        <TodayItem
          key={activities.id}
          activity={activity}
        />
      ))}
    </TodayList>
  ) : (
    <NoActivity>No activity today...</NoActivity>
  )
}

export default TodayActivityList

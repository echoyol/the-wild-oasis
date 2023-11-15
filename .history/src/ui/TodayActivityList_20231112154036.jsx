import styled from 'styled-components'

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

function TodayActivityList({ stays }) {
  return stays?.length > 0 ? (
    <TodayList></TodayList>
  ) : (
    <NoActivity>No activity today...</NoActivity>
  )
}

export default TodayActivityList

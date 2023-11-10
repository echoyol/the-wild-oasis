import styled from 'styled-components'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`

function DashboardLayout() {
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

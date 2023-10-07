import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import styled from 'styled-components'

const Main = styled.main`
  background-color: green;
  padding: 4rem 4.8rem 6.4rem;
`
function AppLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout

import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type='h1'>The Wild Oasis</Heading>
        <Heading type='h2'>Check out</Heading>
        <Button onClick={() => alert('check in')}>Check in</Button>
        <Button onClick={() => alert('check in')}>Chenck out</Button>

        <Input
          type='text'
          placeholder='Number of guests'
        />
      </StyledApp>
    </>
  )
}

export default App

import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { Button } from './Button'

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
`

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
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

import { useDarkMode } from '../context/DarkModeContext'
import ButtonIcon from './ButtonIcon'
import { HiOutlineMoon } from 'react-icons/hi2'

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <ButtonIcon>
      <HiOutlineMoon />
    </ButtonIcon>
  )
}
export default DarkModeToggle

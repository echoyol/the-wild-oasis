import { createContext } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

const DarkModeContext = createContext()

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState()
}

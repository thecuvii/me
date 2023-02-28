import React, { useEffect, useState } from 'react'
import useDarkMode from '../../hooks/useDarkMode'
import Sun from './Sun'
import Moon from './Moon'
import './index.css'

const ModeSwitch: React.FC = () => {
  const { isDarkMode, toggle } = useDarkMode()
  const [showDom, setShowDom] = useState<boolean>(false)

  const handleBodyDark = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  useEffect(() => setShowDom(true), [])
  useEffect(handleBodyDark, [isDarkMode])

  const toggleMode = () => {
    handleBodyDark()
    toggle()
  }

  return showDom ? (
    <div className="mode-switch" onClick={() => toggleMode()}>
      {isDarkMode ? <Sun className="mode-icon" /> : <Moon className="mode-icon" />}
    </div>
  ) : null
}

export default ModeSwitch

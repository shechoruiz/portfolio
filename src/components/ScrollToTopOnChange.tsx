import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTopOnChange() {
  const { key } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [key])

  return null
}

export default ScrollToTopOnChange

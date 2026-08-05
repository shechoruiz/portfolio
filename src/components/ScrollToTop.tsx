import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n'

function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t.scrollToTop.ariaLabel}
      className="btn shadow-lg d-flex align-items-center justify-content-center"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: 48,
        height: 48,
        borderRadius: '50%',
        backgroundColor: '#d3e97a',
        color: '#0a0a0a',
        border: 'none',
        opacity: visible ? 1 : 0,
        visibility: visible ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
        zIndex: 1050,
      }}
    >
      <svg
        width="22"
        height="22"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
    </button>
  )
}

export default ScrollToTop

import { useLanguage } from '../i18n'
import { cvFiles } from '../data/cv'

interface CvButtonProps {
  size?: number
}

function CvButton({ size = 44 }: CvButtonProps) {
  const { lang, t } = useLanguage()

  return (
    <a
      href={cvFiles[lang]}
      download
      className="btn btn-outline-light rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
      style={{ width: size, height: size }}
      aria-label={t.cv.downloadCv}
      title={t.cv.downloadCv}
    >
      <svg
        width="22"
        height="22"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
      </svg>
    </a>
  )
}

export default CvButton

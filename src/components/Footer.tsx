import SocialLinks from './SocialLinks'
import { useLanguage } from '../i18n'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-2">© {new Date().getFullYear()} Sergio Ruiz. {t.footer.rights}</p>
        <div className="d-flex justify-content-center">
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer

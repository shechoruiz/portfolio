import SocialLinks from './SocialLinks'

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-2">© 2026 Sergio Ruiz. Todos los derechos reservados.</p>
        <div className="d-flex justify-content-center">
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default Footer

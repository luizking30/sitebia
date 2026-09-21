import logoImage from '../assets/logo.png'

function Logo({ size = 40 }: { size?: number }) {
  return (
    <img
      src={logoImage}
      alt="Beatriz Amorim - Logo"
      style={{ width: size, height: size }}
      className="object-contain"
    />
  )
}

export default Logo

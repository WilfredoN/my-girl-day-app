import NovaPoshtaSVG from '../assets/nova_poshta.svg'

interface NovaPoshtaLogoProps {
  className?: string
  onClick?: () => void
}

export const NovaPoshtaLogo = ({ onClick }: NovaPoshtaLogoProps) => {
  return <img src={NovaPoshtaSVG} alt="Nova Poshta" width="384px" onClick={onClick} />
}

import { useNavigate } from 'react-router-dom'
import { ContainerButton } from './styled'

interface typeButtonProps {
  title: string
  onClick?: any
  route?: any
  link?: any
}

export function Button({
  title,
  onClick,
  route,
  link,
  ...rest
}: typeButtonProps) {
  const navigate = useNavigate()
  function handleNavigate() {
    navigate(`${route}`)
  }

  return (
    <>
      <ContainerButton onClick={route ? handleNavigate : onClick}>
        {title}
      </ContainerButton>
    </>
  )
}

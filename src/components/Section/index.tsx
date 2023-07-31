import { ReactNode } from 'react'
import { ContainerSection } from './styled'
interface Props {
  children: ReactNode
  isActive?: boolean
}
export function Section({ children, isActive }: Props) {
  return (
    <ContainerSection activeGradient={isActive}>{children}</ContainerSection>
  )
}

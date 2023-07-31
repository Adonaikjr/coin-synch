import { ContainerCard } from './styled'

interface typePropsCard {
  title: string
  description: string
  icon: any
  subTitle: any
}
export function Card({ title, icon, subTitle, description }: typePropsCard) {
  return (
    <ContainerCard>
      <div>
        <img src={icon} alt={title} />
        <span>{subTitle}</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </ContainerCard>
  )
}

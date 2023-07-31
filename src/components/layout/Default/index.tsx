import { Outlet } from 'react-router-dom'
import { Header } from '../../Header'
import { ContainerLayoutDefault } from './styled'
import { useContext, useEffect } from 'react'
import { CardDefault } from '../../CardDefault'
import { ContentContext } from '../../../hook/context'
import { CardDefaultSignUp } from '../../CardDefaultSignUp'

export function LayoutDefault() {
  const { open, openSignUp }: any = useContext(ContentContext)

  useEffect(() => {}, [open, openSignUp])
  return (
    <>
      {open === false ? null : <CardDefault />}
      {openSignUp === false ? null : <CardDefaultSignUp />}

      <ContainerLayoutDefault>
        <Header />
        <Outlet />
      </ContainerLayoutDefault>
    </>
  )
}

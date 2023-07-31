/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { createContext, ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { coinApi } from '../service/coinApi'
import { AxiosResponse } from 'axios'
interface PropsContentContext {
  children: ReactNode
}

export const ContentContext = createContext({})
interface ExchangeRates {
  [asset: string]: number
}
interface TypePropsIcons {
  [assetId: string]: any
}
interface TypePropsGroupAll {
  [key: string]: any
}

export function ContainerContext({ children }: PropsContentContext) {
  const [allRequest, setAllRequest] = useState([])
  const [open, setOpen] = useState<Boolean>(false)
  const [openSignUp, setOpenSignUp] = useState<Boolean>(false)
  // ARRAY QUE DETERMINA QUAIS MOEDAS EU QUERO RECEBER COMO RESPOSTA
  const assetIds = [
    'BTC',
    'ETH',
    'XRP',
    'ADA',
    'BCH',
    'USDT',
    'BIT',
    'DOGE',
    'XLM',
    'LTC',
  ]
  // RECEBENDO INFORMAÇÕES DAS CRIPTOS, (DETALHES)
  async function getCryptos() {
    try {
      const response = await coinApi.get('assets')
      const filteredData = response.data.filter((asset: any) =>
        assetIds.includes(asset.asset_id),
      )
      return filteredData
    } catch (error) {
      console.log(error)
    }
  }
  // RECENBENDO OS ICONES DA API
  async function getIcons() {
    try {
      const icons: TypePropsIcons = {}

      for (const assetId of assetIds) {
        const response: AxiosResponse<any> = await coinApi.get(
          `/assets/icons/${assetId}`,
        )
        icons[assetId] = response.data?.filter((items: any) => {
          return items.asset_id === assetId
        })
      }

      return icons
    } catch (error) {
      console.log(error)
    }
  }
  // COMBINAMOS TODAS AS CHAVES ASSET_ID IGUAIS EM UM UNICO OBJETO
  async function getCombineAll(icons: any, crytoInfos: any) {
    const mergedObject: TypePropsGroupAll = {}

    for (const key in icons) {
      if (icons[key] === crytoInfos[key]) {
        mergedObject[key] = icons[key]
      } else {
        mergedObject[key] = icons[key]
      }
    }

    for (const key in crytoInfos) {
      if (!(key in mergedObject)) {
        mergedObject[key] = crytoInfos[key]
      }
    }

    return mergedObject
  }
  // JUNTAR TODOS OS OBJETOS RETORNADOS DA API, INFORMAÇÕES DA CRIPTO E ICONES ADICIONANDO VALUES A CADA OBJETO
  async function handleWait() {
    try {
      const [cryptoData, iconsData] = await Promise.all([
        getCryptos(),
        getIcons(),
      ])

      const combinedData: any = await getCombineAll(iconsData, cryptoData)

      setAllRequest(Object.values(combinedData))
    } catch (error) {
      console.error(error)
    }
  }

  function handleSign() {
    return open === false ? setOpen(true) : setOpen(false)
  }
  function handleSignUp() {
    return openSignUp === false ? setOpenSignUp(true) : setOpenSignUp(false)
  }

  useEffect(() => {
    // handleWait()
  }, [])

  // OBS: É possivel usar a conexão direto com a api, porém se atualizar muitas vezes a aplicação irá receber uma resposta 429 muitas requisições realizadas, pois estou usando o plano gratuito

  return (
    <ContentContext.Provider
      value={{ allRequest, handleSign, open, handleSignUp, openSignUp }}
    >
      {children}
    </ContentContext.Provider>
  )
}

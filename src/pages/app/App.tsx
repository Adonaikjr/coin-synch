/* eslint-disable camelcase */
import { ContainerApp, ContainerImage, ContentList } from './styled'
import { Carrousel } from '../../components/Carrousel'
import { Section } from '../../components/Section'
import maskImage from '../../assets/tmp/MaskEffect.svg'
import { Card } from '../../components/Card'
import iconBitcoin from '../../assets/tmp/svg/bitcoin.svg'
import { Button } from '../../components/Button'
import { ContentContext } from '../../hook/context'
import { useContext, useState, useEffect } from 'react'
import { Footer } from '../../components/Footer'
import { FakeApi } from '../../service/fakeUrl'
// tipagem
interface MergedObject {
  asset_id: string
  data_end: string
  data_orderbook_end: string
  data_orderbook_start: string
  data_quote_end: string
  data_quote_start: string
  data_start: string
  data_symbols_count: number
  data_trade_end: string
  data_trade_start: string
  id_icon: string
  name: string
  price_usd: number
  type_is_crypto: number
  volume_1day_usd: number
  volume_1hrs_usd: number
  volume_1mth_usd: number
  url?: string // A propriedade 'url' é opcional
}
export function App() {
  const [dataListCryto, setDataListCripto] = useState([])

  // O codigo abaixo foi feito para ordenar corretamente as criptos com os icones para mostrar na view
  const { allRequest }: any = useContext(ContentContext)
  const mergedData: { [key: string]: MergedObject } = {}
  for (const key in allRequest) {
    if (
      typeof allRequest[key] === 'object' &&
      !Array.isArray(allRequest[key])
    ) {
      const { asset_id, ...rest } = allRequest[key]
      if (Array.isArray(allRequest[Number(key) + 10])) {
        const urlObj = allRequest[Number(key) + 10][0]
        mergedData[asset_id] = { asset_id, ...rest, ...urlObj }
      } else {
        mergedData[asset_id] = { asset_id, ...rest }
      }
    }
  }
  // const mergedArray = Object.values(mergedData)
  // console.log(mergedArray)

  // -------------------------------------------------------------

  // O codigo abaixo foi para salvar a resposta da CoinApi para fazer os testes para não ocorrer o erro 429
  // async function handlePost() {
  //  try {
  //    await FakeApi.post('/posts', mergedArray)
  //  } catch (error) {
  //   console.log(error)
  //  }
  // }

  const [showMore, setShowMore] = useState(false)
  const itemsPerPage = 5

  const handleShowMore = () => {
    setShowMore(true)
  }
  const handleLess = () => {
    setShowMore(false)
  }

  // USAMOS OS DADOS SALVOS NO JSON-SERVER
  useEffect(() => {
    async function handleConnectFakeApi() {
      try {
        const response = await FakeApi.get('/cryptos')
        setDataListCripto(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    handleConnectFakeApi()
  }, [])

  return (
    <ContainerApp>
      <Carrousel />
      {/* <button onClick={handlePost}> TESTAR</button> */}
      <ContainerImage src={maskImage} alt="effect" />
      <Section isActive>
        <article>
          <div>
            <Card
              icon={iconBitcoin}
              subTitle="For your company"
              title="Crypto Solutions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
            />
            <Card
              icon={iconBitcoin}
              subTitle="For your company"
              title="Crypto Solutions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
            />
          </div>
          <div style={{ justifyContent: 'end' }}>
            <Card
              icon={iconBitcoin}
              subTitle="For your company"
              title="Crypto Solutions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
            />
            <Card
              icon={iconBitcoin}
              subTitle="For your company"
              title="Crypto Solutions"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,"
            />
          </div>
        </article>
        <aside>
          <article>
            <h5>Lorem ipsum </h5>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              delectus laborum est odio id nihil iste illum repudiandae?
              Provident libero optio amet et illo corrupti ipsam necessitatibus
              adipisci aliquam aspernatur.
            </p>
            <Button title="Sign up now" />
          </article>
        </aside>
      </Section>
      <Section>
        <ContentList>
          <h1>Top Cryptos</h1>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Crypto</th>
                <th>Price</th>
                <th>Change</th>
                <th>Trade</th>
              </tr>
            </thead>
            <tbody>
              {dataListCryto &&
                dataListCryto
                  .slice(0, showMore ? dataListCryto.length : itemsPerPage)
                  .map((item: any, index) => (
                    <tr key={item.id}>
                      <td>{index}</td>
                      <td
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <img
                          height={32}
                          width={32}
                          src={item.url}
                          alt={item.asset_id}
                        />
                        {item.asset_id}
                      </td>
                      <td> $ {item.price_usd && item.price_usd.toFixed(2)}</td>
                      <td>{item.data_symbols_count}</td>
                      <td>
                        <button>BUT</button>
                      </td>
                    </tr>
                  ))}
            </tbody>
            {!showMore && dataListCryto.length > itemsPerPage && (
              <tfoot>
                <tr>
                  <td colSpan={5}>
                    <button onClick={handleShowMore}>View more +</button>
                  </td>
                </tr>
              </tfoot>
            )}
            {showMore && dataListCryto.length > itemsPerPage && (
              <tfoot>
                <tr>
                  <td colSpan={10}>
                    <button onClick={handleLess}>View less</button>
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </ContentList>
      </Section>
      <Footer />
    </ContainerApp>
  )
}

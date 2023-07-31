import 'react-awesome-slider/dist/styles.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import { ContainerStyleCarrousel } from './styled'
import banner01 from '../../assets/tmp/carousel01.svg'
import banner02 from '../../assets/tmp/carousel02.svg'
import banner03 from '../../assets/tmp/carousel03.svg'
import { Button } from '../Button'
import { ScroolCarousel } from '../ScroolCarousel'

const AutoplaySlider = withAutoplay(ContainerStyleCarrousel)
export function Carrousel() {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={true}
      animation="FadeAnimation"
    >
      <div className="page-image-one">
        <section>
          <article>
            <h1>lorem lorem</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              delectus laborum est odio id nihil iste illum repudiandae?
              Provident libero optio amet et illo corrupti ipsam necessitatibus
              adipisci aliquam aspernatur.
            </p>
            <Button title="SIGN UP NOW" />
          </article>
        </section>
        <ScroolCarousel>
          <img src={banner01} alt="" />
          <img src={banner02} alt="" />
          <img src={banner03} alt="" />
        </ScroolCarousel>
      </div>

      {/* <div className="page-image-one">
        <img src={banner02} alt="" />
        <section>
          <h1>Ambientes concebidos</h1>
          <p>
            <Balancer>para proporcionar diversão e conforto a todos.</Balancer>
          </p>
        </section>
      </div>
      <div className="page-image-one">
        <img src={banner06} alt="" />
        <section>
          <h1>O Evento dos Sonhos</h1>
          <p>
            <Balancer>Um local de sonho para eventos inesquecíveis.</Balancer>
          </p>
          <article>
            <Button route="contato" title="Quero Agendar Agora!." />
          </article>
        </section>
      </div>
      <div className="page-image-one">
        <img src={banner05} alt="" />
        <section>
          <h1>Celebrações Empresariais</h1>

          <p>Explore nossa Experiência!</p>

          <article>
          
            <Button route="sobre" title="Sobre nós" />{' '}
            <Button route="sobre" title="Serviços" />
          </article>
        </section>
      </div> */}
    </AutoplaySlider>
  )
}

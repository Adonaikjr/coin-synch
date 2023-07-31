import { ContainerFooter } from './styled'
import bgFooter from '../../assets/tmp/bkFooter.svg'
import { Button } from '../Button'
import { Input } from '../Input'
import { useState } from 'react'
import { FakeApi } from '../../service/fakeUrl'
export function Footer() {
  const [email, setEmail] = useState('')
  async function handleAddNewLaster(e: any) {
    try {
      if (!email.trim()) {
        return alert('Preencha o Email!')
      }
      await FakeApi.post('/newlaster', { email })
      return alert('Cadastrado!')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <ContainerFooter>
      <img src={bgFooter} alt="" />
      <section>
        <h4>Lorem ipsum </h4>
        <h2>Lorem ipsum </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
      </section>

      <form>
        <fieldset>
          <legend></legend>
          <label>
            Email
            <Input
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </label>
          <Button onClick={handleAddNewLaster} title="Subscribe" />
        </fieldset>
      </form>
    </ContainerFooter>
  )
}

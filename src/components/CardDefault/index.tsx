/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { ContainerCardDefault } from './styled'
import { ContentContext } from '../../hook/context'
import { FakeApi } from '../../service/fakeUrl'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
export function CardDefault({ title, text, children }: any) {
  const { handleSign, handleSignUp }: any = useContext(ContentContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleNavigate(route: string) {
    navigate(route)
  }

  async function handleSignIn(e: Event) {
    e.preventDefault()

    try {
      const response = await FakeApi.get('/users')
      const user = response.data.find(
        (item: any) => item.email === email && item.password === password,
      )
      console.log(user)
      if (user) {
        handleNavigate('/home')
      } else {
        handleNavigate('/')
        return alert('Conta não cadastrada!')
      }
      setEmail('')
      setPassword('')
      return handleSign()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ContainerCardDefault>
      <AnimatePresence>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form>
            <span
              style={{ textAlign: 'right', cursor: 'pointer' }}
              onClick={handleSign}
            >
              X
            </span>
            <fieldset>
              <h2>
                Sign in to
                <strong>
                  <span> Coin</span>Synch
                </strong>
              </h2>
              <label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </label>
              <label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </label>
              <Button onClick={handleSignIn} title="Sign In" />
              <span>
                Don't have an account?
                <strong
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    handleSign()
                    handleSignUp()
                  }}
                >
                  Sign up to
                </strong>{' '}
                CoinSynch
              </span>
            </fieldset>
          </form>
        </motion.div>
      </AnimatePresence>
    </ContainerCardDefault>
  )
}

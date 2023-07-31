/* eslint-disable no-sequences */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { ContainerCardDefault } from './styled'
import { ContentContext } from '../../hook/context'
import { FakeApi } from '../../service/fakeUrl'
import { motion, AnimatePresence } from 'framer-motion'
export function CardDefaultSignUp({ title, text, children }: any) {
  const { handleSign, handleSignUp }: any = useContext(ContentContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [name, setName] = useState('')

  async function handleSignIn(e: Event) {
    e.preventDefault()
    const SignUp = {
      name,
      email,
      password,
      passwordCheck,
    }
    if (
      !email.trim() ||
      !password.trim() ||
      !name.trim() ||
      !passwordCheck.trim()
    ) {
      return alert('Algo de errado! Preencha todos os campos.')
    }
    try {
      await FakeApi.post('/users', SignUp)
      alert('Cadastrado com sucesso!')
      setEmail('')
      setName('')
      setPassword('')
      setPasswordCheck('')
      handleSignUp()
      return handleSign()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ContainerCardDefault>
      <AnimatePresence>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form>
            <span
              style={{ textAlign: 'right', cursor: 'pointer' }}
              onClick={handleSignUp}
            >
              X
            </span>
            <fieldset>
              <h2>
                Sign up to
                <strong>
                  <span> Coin</span>Synch
                </strong>
              </h2>
              <label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </label>
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
              <label>
                <Input
                  type="password"
                  value={passwordCheck}
                  onChange={(e) => setPasswordCheck(e.target.value)}
                  placeholder="Confirm your password"
                />
              </label>
              <Button onClick={handleSignIn} title="Sign Up" />
              <span>
                Don't have an account?{' '}
                <strong
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    handleSignUp()
                    handleSign()
                  }}
                >
                  Sign in to
                </strong>
                <p>
                  <strong>
                    <span> Coin</span>Synch
                  </strong>
                </p>
              </span>
            </fieldset>
          </form>
        </motion.div>
      </AnimatePresence>
    </ContainerCardDefault>
  )
}

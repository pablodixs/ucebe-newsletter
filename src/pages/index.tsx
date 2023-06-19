import { Logo } from '@/components/logo'
import { Button, Container, Form } from '@/styles/pages'
import { Montserrat } from 'next/font/google'
import { styled } from '../../stitches.config'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import * as Checkbox from '@radix-ui/react-checkbox'

export const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(false)
    setSuccess(false)

    const body = {
      email: email,
    }

    axios
      .post('https://api-ucebe.onrender.com/user', body)
      .then((res) => {
        setEmail('')
        setSuccess(true)
      })
      .catch((err) => {
        console.log(err)
        setError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className={montserrat.className}>
      <Container>
        <Logo />
        <h1>Se inscreva em nossa newsletter 📝</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Seu e-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="someone@a.ucb.br"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <span className="error-text">
              E-mail já inscrito. Tente novamente.
            </span>
          )}
          {success && (
            <span className="success-text">
              Você foi inscrito com sucesso. 🎉
            </span>
          )}
          <div className="check-area">
            <CheckboxRoot required id="terms">
              <CheckboxIndicator>X</CheckboxIndicator>
            </CheckboxRoot>
            <label htmlFor="terms">
              Aceito os Termos de Uso e a Política de Privacidade
            </label>
          </div>
          <Button disabled={isLoading} type="submit">
            Tudo pronto!
          </Button>
        </Form>
        <Button onClick={() => router.push('/news')} variant="secondary">
          Ver últimas notícias
        </Button>
        <footer>
          <Link href={'/termosdeuso'}>Termos de Uso</Link>
          <Link href={'/privacidade'}>Política de Privacidade</Link>
        </footer>
      </Container>
    </div>
  )
}

const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid $gray300',
  cursor: 'pointer',
  '&:hover': { borderColor: '$blue500' },
  '&:focus': { boxShadow: `0 0 0 2px rgba(0, 0, 0, .3)` },
})

const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$blue500',
})

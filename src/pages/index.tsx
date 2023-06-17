import * as Checkbox from '@radix-ui/react-checkbox'
import { Logo } from '@/components/logo'
import { Button, Container, Form } from '@/styles/pages'
import { Montserrat } from 'next/font/google'
import { ArrowUpRight, Check } from '@phosphor-icons/react'

import { styled } from '../../stitches.config'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  return (
    <div className={montserrat.className}>
      <Container>
        <Logo />
        <h1>Se inscreva em nossa newsletter 📝</h1>
        <Form>
          <label htmlFor="email">Seu e-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="someone@a.ucb.br"
            required
          />
          <div className="check-area">
            <CheckboxRoot required id="terms">
              <CheckboxIndicator>
                <Check size={24} weight="bold" />
              </CheckboxIndicator>
            </CheckboxRoot>
            <label htmlFor="terms">
              Aceito os Termos de Uso e a Política de Privacidade
            </label>
          </div>
          <Button type="submit">Tudo pronto!</Button>
        </Form>
        <Button onClick={() => router.push('/news')} variant="secondary">
          Ver últimas notícias
          <ArrowUpRight weight='bold' size={24} />
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

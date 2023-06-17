import { Header } from '@/components/header'
import { ContentContainer, FeatureContainer, Label, NewsArticleContainer, NewsContentContainer } from '@/styles/pages/news'
import { montserrat } from '.'
import Link from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react'

export default function News() {
  return (
    <main className={montserrat.className}>
      <Header />
      <ContentContainer>
        <FeatureContainer>
          <h2>Se junte aos nossos 7 leitores ativos</h2>
          <Link href={'/'}>
            Inscreva-se <ArrowUpRight size={18} weight="bold" />
          </Link>
        </FeatureContainer>
        <NewsContentContainer>
          <h1>Últimas 🔥</h1>
          <NewsArticleContainer>
            <h2>Período de Renovação de Matrícula ⏳</h2>
            <p>Começou o período de Renovação de Matrícula.</p>
            <span>17/06/2023</span>
            <Label>Acadêmico</Label>
          </NewsArticleContainer>
          <NewsArticleContainer>
            <h2>Aberto seleção para vôlei 🏐</h2>
            <p></p>
            <span>15/06/2023</span>
            <Label category={'atleticas'}>Altlética</Label>
          </NewsArticleContainer>
        </NewsContentContainer>
      </ContentContainer>
    </main>
  )
}

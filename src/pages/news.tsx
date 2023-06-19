import {
  ContentContainer,
  FeatureContainer,
  Label,
  NewsArticleContainer,
  NewsContentContainer,
} from '@/styles/pages/news'
import { Header } from '@/components/header'
import { montserrat } from '.'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'

interface DataNewsProps {
  id: string
  title: string
  description: string
  createdAt: string
  category: string
}

export default function News() {
  const [newsData, setNewsData] = useState<DataNewsProps[]>([])

  useEffect(() => {
    axios
      .get('https://api-ucebe.onrender.com/posts')
      .then((response) => setNewsData(response.data.posts))
      .catch((error) => console.error(error))
  }, [])

  return (
    <main className={montserrat.className}>
      <Header />
      <ContentContainer>
        <FeatureContainer>
          <h2>Se junte à nossa newsletter 👇</h2>
          <Link href={'/'}>Inscreva-se</Link>
        </FeatureContainer>
        <NewsContentContainer>
          <h1>Últimas 🔥</h1>
          {newsData.map((post) => {
            return (
              <NewsArticleContainer key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <Label>{post.category}</Label>
              </NewsArticleContainer>
            )
          })}
        </NewsContentContainer>
      </ContentContainer>
    </main>
  )
}

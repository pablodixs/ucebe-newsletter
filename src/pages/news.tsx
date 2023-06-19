import {
  ContentContainer,
  FeatureContainer,
  Label,
  LoadingContainer,
  NewsArticleContainer,
  NewsContentContainer,
} from '@/styles/pages/news'
import { Header } from '@/components/header'
import { montserrat } from '.'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { ArrowUpRight } from '@phosphor-icons/react'
import { SpinnerCircular } from 'spinners-react'

interface DataNewsProps {
  id: string
  title: string
  description: string
  createdAt: string
  category: string
}

export default function News() {
  const [newsData, setNewsData] = useState<DataNewsProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get('https://api-ucebe.onrender.com/posts')
      .then((response) => setNewsData(response.data.posts))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <main className={montserrat.className}>
      <Header />
      <ContentContainer>
        <FeatureContainer>
          <h2>Se junte à nossa newsletter 👇</h2>
          <Link href={'/'}>
            Inscreva-se <ArrowUpRight size={24} />
          </Link>
        </FeatureContainer>
        <NewsContentContainer>
          <h1>Últimas 🔥</h1>
          {isLoading ? (
            <LoadingContainer>
              <SpinnerCircular
                color="#fff"
                secondaryColor="rgba(0, 0, 0, 0.1)"
                thickness={150}
              />
            </LoadingContainer>
          ) : (
            newsData.map((post) => {
              return (
                <NewsArticleContainer key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <Label category={'atleticas'}>{post.category}</Label>
                </NewsArticleContainer>
              )
            })
          )}
        </NewsContentContainer>
      </ContentContainer>
    </main>
  )
}

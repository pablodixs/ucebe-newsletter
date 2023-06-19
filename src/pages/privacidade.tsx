import { Header } from '@/components/header'
import {
  ContentContainer,
  FeatureContainer,
  Label,
  NewsArticleContainer,
  NewsContentContainer,
} from '@/styles/pages/news'
import { montserrat } from '.'
import Link from 'next/link'
import { TextContent } from '@/styles/pages/terms'
import { useRouter } from 'next/router'

export default function News() {
  const router = useRouter()

  return (
    <main className={montserrat.className}>
      <Header />
      <ContentContainer>
        <TextContent>
          <button onClick={() => router.back()}>Voltar</button>
          <h1>Política de Privacidade</h1>
          <p>
            A sua privacidade é de extrema importância para nós. Esta política
            de privacidade descreve como coletamos, usamos, divulgamos e
            protegemos as informações fornecidas por você ao se inscrever em
            nossa newsletter
          </p>
          <h2>1. Coleta de Informações</h2>
          <p>
            1.1. Coletamos o seu endereço de e-mail quando você se inscreve em
            nossa newsletter. Não coletamos ou solicitamos quaisquer outras
            informações pessoais identificáveis.
          </p>
          <h2>2. Uso das Informações</h2>
          <p>
            2.1. Utilizamos o seu endereço de e-mail exclusivamente para enviar
            a nossa newsletter e fornecer informações relevantes relacionadas ao
            conteúdo que compartilhamos.
          </p>
          <p>
            2.2. Não compartilhamos, vendemos, alugamos ou divulgamos o seu
            endereço de e-mail a terceiros, a menos que seja necessário para
            cumprir com obrigações legais, responder a processos judiciais,
            fazer cumprir nossos direitos legais ou proteger a segurança e
            integridade de nossa newsletter.
          </p>
          <h2>3. Proteção de Dados</h2>
          <p>
            3.1. Implementamos medidas técnicas e organizacionais adequadas para
            proteger suas informações contra acesso não autorizado, uso
            indevido, alteração ou destruição.
          </p>
          <p>
            3.2. Manteremos suas informações pessoais apenas pelo tempo
            necessário para cumprir as finalidades para as quais foram coletadas
            ou conforme exigido por lei.
          </p>
          <h2>4. Cookies e Tecnologias Semelhantes</h2>
          <p>
            4.1. Podemos usar cookies e outras tecnologias semelhantes em nossa
            newsletter para melhorar a sua experiência. Essas tecnologias podem
            coletar informações não pessoais, como o tipo de navegador, sistema
            operacional, data e horário de acesso e páginas visitadas.
          </p>
          <h2>5. Links para Sites de Terceiros</h2>
          <p>
            5.1. Nossa newsletter pode conter links para sites de terceiros.
            Esta política de privacidade não se aplica a esses sites.
            Recomendamos que você revise as políticas de privacidade desses
            sites antes de fornecer qualquer informação pessoal.
          </p>
          <h2>6. Consentimento e Retirada do Consentimento</h2>
          <p>
            6.1. Ao se inscrever em nossa newsletter, você concorda com os
            termos desta política de privacidade. Você pode retirar o seu
            consentimento a qualquer momento, cancelando a inscrição em nossa
            newsletter. Após a retirada do consentimento, cessaremos o envio de
            e-mails promocionais, mas poderemos continuar a enviar comunicações
            não promocionais, como atualizações sobre a nossa newsletter.
          </p>
          <h2>7. Alterações na Política de Privacidade</h2>
          <p>
            7.1. Reservamo-nos o direito de atualizar ou modificar esta política
            de privacidade a qualquer momento. Recomendamos que você revise
            regularmente esta política para se manter informado sobre eventuais
            alterações.
          </p>
          <p>
            Caso tenha alguma dúvida ou preocupação sobre esta política de
            privacidade, entre em contato conosco através dos canais de suporte
            disponíveis.
          </p>
          <p>Data de entrada em vigor: 12 de junho de 2023</p>
        </TextContent>
      </ContentContainer>
    </main>
  )
}

import { montserrat } from '.'
import { ArrowLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/router'

import { Header } from '@/components/header'
import { ContentContainer } from '@/styles/pages/news'
import { TextContent } from '@/styles/pages/terms'

export default function News() {
  const router = useRouter()

  return (
    <main className={montserrat.className}>
      <Header />
      <ContentContainer>
        <TextContent>
          <button onClick={() => router.back()}>
            <ArrowLeft size={20} /> Voltar
          </button>
          <h1>Termos de Uso</h1>
          <p>
            Bem-vindo à nossa newsletter! Antes de prosseguir, pedimos que leia
            atentamente os seguintes termos de uso, que regem o seu acesso e uso
            da nossa newsletter.
          </p>
          <p>
            Ao se inscrever e utilizar nossa newsletter, você concorda em
            cumprir estes termos. Caso não concorde com alguma parte destes
            termos, recomendamos que não utilize nossa newsletter.
          </p>
          <h2>1. Conteúdo e Propriedade Intelectual</h2>
          <p>
            1.1. Todo o conteúdo disponibilizado em nossa newsletter, incluindo,
            mas não se limitando a, textos, imagens, vídeos, gráficos e outros
            materiais, são de nossa propriedade ou licenciados para nós, e estão
            protegidos por leis de direitos autorais e outras leis de
            propriedade intelectual.
          </p>
          <p>
            1.2. O conteúdo disponibilizado em nossa newsletter é fornecido
            apenas para fins informativos. Você concorda em não reproduzir,
            distribuir, modificar, exibir, transmitir, publicar, adaptar, criar
            trabalhos derivados ou explorar comercialmente qualquer conteúdo
            disponibilizado em nossa newsletter sem a nossa autorização prévia
            por escrito.
          </p>
          <h2>2. Inscrição na Newsletter</h2>
          <p>
            2.1. Ao se inscrever em nossa newsletter, você concorda em fornecer
            informações precisas e atualizadas. Você é responsável por manter
            suas informações de contato atualizadas e por garantir que elas
            estejam corretas.
          </p>
          <p>
            2.2. Reservamo-nos o direito de recusar ou cancelar a inscrição de
            qualquer pessoa em nossa newsletter a nosso exclusivo critério, a
            qualquer momento e sem aviso prévio.
          </p>
          <h2>3. Uso Adequado</h2>
          <p>
            3.1. Ao utilizar nossa newsletter, você concorda em não: <br /> a)
            violar quaisquer leis aplicáveis; <br /> b) enviar ou transmitir
            qualquer conteúdo ilegal, prejudicial, ameaçador, abusivo,
            difamatório, obsceno, ofensivo, invasivo da privacidade de outras
            pessoas ou que viole direitos de propriedade intelectual; <br /> c)
            interferir ou interromper a operação adequada de nossa newsletter;
            <br /> d) tentar obter acesso não autorizado a nossa newsletter ou a
            sistemas relacionados.
          </p>
          <h2>4. Privacidade e Proteção de Dados</h2>
          <p>
            4.1. Respeitamos sua privacidade e estamos em conformidade com as
            leis de proteção de dados aplicáveis. Ao se inscrever em nossa
            newsletter, você concorda com a nossa Política de Privacidade, que
            descreve como coletamos, usamos e protegemos suas informações
            pessoais.
          </p>
          <h2>Alterações nos Termos de Uso</h2>
          <p>
            5.1. Reservamo-nos o direito de modificar estes termos de uso a
            qualquer momento, mediante aviso prévio. Recomendamos que você
            verifique regularmente os termos de uso para se manter informado
            sobre eventuais alterações. O uso continuado de nossa newsletter
            após a publicação de alterações constituirá sua concordância com
            tais alterações.
          </p>
          <h2>Limitação de Responsabilidade</h2>
          <p>
            6.1. Nossa newsletter é fornecida &quot;no estado em que se
            encontra&quot;, sem quaisquer garantias, expressas ou implícitas.
            Não nos responsabilizamos por quaisquer danos diretos, indiretos,
            incidentais, consequenciais ou punitivos decorrentes do uso ou
            incapacidade de uso de nossa newsletter.
          </p>
          <h2>7. Jurisdição e Lei Aplicável</h2>
          <p>
            7.1. Estes termos de uso serão regidos e interpretados de acordo com
            as leis do Brasil. Qualquer disputa relacionada a estes termos
            estará sujeita à jurisdição exclusiva dos tribunais competentes em
            Brasília, Distrito Federal.
          </p>
          <p>
            Se você tiver alguma dúvida ou preocupação sobre estes termos de
            uso, entre em contato conosco através dos canais de suporte
            disponíveis. Agradecemos sua atenção e esperamos que aproveite nossa
            newsletter!
          </p>
          <p>Data de entrada em vigor: 12 de junho de 2023</p>
        </TextContent>
      </ContentContainer>
    </main>
  )
}

import ReturnButton from '~/components/ReturnButton'
import { ROUTES } from '~/routes/pages-routes'

import NewsCard from './components/NewsCard'
import News1Content, {
  frontmatter as newsContentFrontmatter,
} from './content/news1.mdx'
import News2Content from './content/news2.mdx'
import News3Content from './content/news3.mdx'
import News4Content from './content/news4.mdx'
import News5Content from './content/news5.mdx'
import News6Content from './content/news6.mdx'
import News7Content from './content/news7.mdx'
import News8Content from './content/news8.mdx'
import News9Content from './content/news9.mdx'
import News10Content from './content/news10.mdx'
import News11Content from './content/news11.mdx'

const News = () => {
  const addImageFallback = (event: { currentTarget: { src: string } }) => {
    event.currentTarget.src = '/images/cachorro_arabe.jpeg'
  }
  const news = [
    {
      description: <News2Content />,
      link: 'https://expresso.estadao.com.br/sao-paulo/2023/06/05/usina-eco-cultural-leva-arte-e-ecologia-a-antigo-incinerador/',
    },
    {
      description: <News3Content />,
      link: 'https://g1.globo.com/sp/sao-paulo/noticia/2023/06/14/moradores-da-zona-sul-de-sp-tentam-transformar-area-de-antigo-incinerador-de-lixo-hospitalar-em-centro-cultural-e-acabam-multados-pela-prefeitura.ghtml',
    },
    {
      description: <News4Content />,
      link: 'https://www.ipiranga22.com.br/2023/05/movimento-usina-eco-cultural-ganha-apoios-e-se-candidata-a-verba-de-r-6-milhoes/',
    },
    {
      description: <News5Content />,
      link: 'https://ipiranganews.inf.br/movimento-quer-transformar-antigo-incinerador-em-usina-eco-cultural/',
    },
    {
      description: <News6Content />,
      link: 'https://www.saopaulo.sp.leg.br/blog/comissao-de-politica-urbana-promove-audiencia-publica-no-sabado-sobre-usina-eco-cultural-no-ipiranga/',
    },
    {
      description: <News7Content />,
      link: 'https://pt.wikipedia.org/wiki/Incinerador_Vergueiro',
    },
    {
      description: <News8Content />,
      link: 'https://www.uol.com.br/ecoa/ultimas-noticias/2022/08/22/orgao-humano-e-mutacao-em-plantas-simbolo-da-poluicao-pode-ser-salvo-em-sp.htm',
    },
    {
      description: <News9Content />,
      link: 'https://ipirangafeelings.com.br/antigo-incinerador-vergueiro-em-obras/',
    },
    {
      description: <News10Content />,
      link: 'https://www.saopaulo.sp.leg.br/blog/transformacao-de-antigo-incinerador-no-ipiranga-em-espaco-de-cultura-e-meio-ambiente-e-discutida-em-audiencia/',
    },
    {
      description: <News11Content />,
      link: 'https://www.ipiranga22.com.br/2023/05/subprefeitura-pede-reintegracao-de-posse-do-antigo-incinerador-vergueiro/',
    },
  ]
  return (
    <main className="inset-x-0 bottom-0 pt-20">
      <ReturnButton path={ROUTES.HOME} />
      <h1 className="py-10 text-center text-4xl font-bold">Notícias</h1>
      <section className="flex flex-col items-center justify-center gap-2 py-4 md:flex-row md:px-6 md:py-10">
        <img
          src={newsContentFrontmatter.image}
          alt=""
          className="h-28 w-28 rounded-2xl md:h-52 md:w-52"
          onError={addImageFallback}
        />
        <div className="flex h-64 w-64 items-center justify-center md:pl-6">
          <News1Content />
        </div>
      </section>
      <ul className="mx-4 rounded-2xl bg-white md:p-6">
        {news.map(({ link, description }) => (
          <NewsCard description={description} link={link} key={link} />
        ))}
      </ul>
    </main>
  )
}

export default News

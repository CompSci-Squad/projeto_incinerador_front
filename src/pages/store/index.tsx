import { useSearchParams } from 'react-router-dom'

import Loader from '~/components/Loader'
import Pagination from '~/components/Pagination'
import ReturnButton from '~/components/ReturnButton'
import { useProductsLoader } from '~/features/store/store.loader'
import { ROUTES } from '~/routes/pages-routes'

import StoreCard from './components/StoreCard'
import StoreContent, {
  frontmatter as storeFrontmatter,
} from './content/store.mdx'

const Store = () => {
  const [searchParams] = useSearchParams()
  const { products } = useProductsLoader()
  const { data } = products
  const page = Number(searchParams.get('page'))
  return (
    <main className="inset-x-0 bottom-0 pt-16">
      <ReturnButton path={ROUTES.HOME} />
      <h1 className="py-10 text-center text-4xl font-bold">Loja</h1>
      <section className="flex flex-col items-center justify-center gap-2 px-6 py-10 md:flex-row md:justify-between">
        <img
          src={storeFrontmatter.image}
          alt=""
          className="h-24 w-24 rounded-2xl md:h-52 md:w-52"
        />
        <StoreContent />
      </section>
      <Loader
        resolve={data}
        loading={<h1>loading...</h1>}
        error={<h1> ja faço</h1>}
      >
        {(data) => (
          <section className="bg-white md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 md:p-6">
            {data.map(({ id, title, images, price, description }) => (
              <StoreCard
                id={id}
                title={title}
                images={images}
                description={description}
                price={price}
                key={id}
              />
            ))}
          </section>
        )}
      </Loader>
      <section className="flex items-center justify-center py-4">
        <Pagination page={page} totalPages={8} />
      </section>
    </main>
  )
}

export default Store

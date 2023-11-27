import Loader from '~/components/Loader'
import Pagination from '~/components/Pagination'
import ReturnButton from '~/components/ReturnButton'
import { useProductsLoader } from '~/features/store/store.loader'
import { ROUTES } from '~/routes/pages-routes'
import { parseLinkHeader } from '~/utils/headerParser'

import StoreCard from './components/StoreCard'
import StoreContent, {
  frontmatter as storeFrontmatter,
} from './content/store.mdx'

const Store = () => {
  const { products } = useProductsLoader()
  const { data, headers } = products
  const { current, last } = parseLinkHeader(headers['link'])
  return (
    <main className="inset-x-0 bottom-0 pt-16">
      <ReturnButton path={ROUTES.HOME} />
      <h1 className="py-10 text-center text-4xl font-bold">Loja</h1>
      <section className="flex flex-col items-center justify-center gap-2 py-4 md:flex-row md:px-6 md:py-10">
        <img
          src={storeFrontmatter.image}
          alt=""
          className="h-28 w-28 rounded-2xl md:h-52 md:w-52"
        />
        <div className=" flex h-64 w-64 items-center justify-center md:pl-6">
          <StoreContent />
        </div>
      </section>
      <Loader
        resolve={data}
        loading={<h1>loading...</h1>}
        error={<h1> ja faço</h1>}
      >
        {(data) => (
          <section className="rounded-2xl bg-white md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 md:p-6">
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
        <Pagination page={current} totalPages={last} />
      </section>
    </main>
  )
}

export default Store

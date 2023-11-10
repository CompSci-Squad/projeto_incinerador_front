import Loader from '~/components/Loader'
import { useProductsLoader } from '~/features/store/store.loader'

import ReturnButton from '../../components/ReturnButton'
import { ROUTES } from '../../routes/pages-routes'
import StoreCard from './components/StoreCard'
import StoreContent, {
  frontmatter as storeFrontmatter,
} from './content/store.mdx'

const Store = () => {
  const { products } = useProductsLoader()
  const { data } = products
  return (
    <main>
      <ReturnButton path={ROUTES.HOME} />
      <h1 className="py-10 text-center text-4xl font-bold">Loja</h1>
      <section className="flex items-center justify-center gap-10 py-10">
        <img src={storeFrontmatter.image} alt="" className="rounded-2xl" />
        <StoreContent />
      </section>
      <Loader
        resolve={data}
        loading={<h1>loading...</h1>}
        error={<h1> ja faço</h1>}
      >
        {(data) => (
          <section className="grid grid-cols-4 grid-rows-2 gap-4 p-6">
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
    </main>
  )
}

export default Store

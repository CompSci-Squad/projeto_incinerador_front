import { Link } from 'react-router-dom'

import Loader from '~/components/Loader'
import { useProductsLoader } from '~/features/store/store.loader'

import { ROUTES } from '../../routes/pages-routes'
import StoreContent, {
  frontmatter as storeFrontmatter,
} from './content/store.mdx'

const Store = () => {
  const { products } = useProductsLoader()
  const { data } = products
  return (
    <main className="h-screen">
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
            {data.map(({ id, title, mainImage, price, description }) => (
              <div key={id} className="card m-4 shadow-xl">
                <figure>
                  <img
                    src={mainImage}
                    loading="eager"
                    alt={`imagem do produto ${title}`}
                    className="h-52 w-52 rounded-2xl"
                  />
                </figure>
                <div className="card-body gap-6">
                  <h3 className="card-title">{title}</h3>
                  <span className="basis-full">{description}</span>
                  <span>{`R$${price}`}</span>
                  <div className="card-actions justify-end">
                    <Link
                      to={ROUTES.STORE.DETAILS(id)}
                      className="btn bg-eco_green text-eco_white hover:bg-eco_green_hover"
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </Loader>
    </main>
  )
}

export default Store

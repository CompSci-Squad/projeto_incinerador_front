import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useProductsLoader } from '~/features/store/store.loader'
import { useNavigateParams } from '~/hooks/useNavigateParams'

import Pagination from './components/Pagination'

const Store = () => {
  const navigate = useNavigateParams()
  const [pageNum, setPageNum] = useState<number>(1)
  const [searchParams, setSearchParams] = useSearchParams()
  const { products } = useProductsLoader()
  const { data, headers } = products
  const pages = headers['x-total-count'] / 8
  const setPage = () => {}
  return (
    <main>
      <section className="grid grid-cols-4 grid-rows-2 gap-4 p-6">
        {data.map(({ id, title, mainImage, price, description }) => (
          <div key={id} className="card m-4 shadow-xl">
            <figure>
              <img
                src={mainImage}
                alt={`imagem do produto ${title}`}
                className="h-52 w-52 rounded-2xl"
              />
            </figure>
            <div className="card-body gap-6">
              <h3 className="card-title">{title}</h3>
              <span className="basis-full">{description}</span>
              <span>{`R$${price}`}</span>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">por enquanto nada</button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className=" join flex items-center justify-center">
        <Pagination
          page={}
          totalPages={pages}
          nextPage={pageNum + 1}
          prevPage={0}
          hasNextPage={true}
        />
      </div>
    </main>
  )
}

export default Store

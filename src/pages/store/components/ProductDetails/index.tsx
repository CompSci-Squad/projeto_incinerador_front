import { useState } from 'react'

import Loader from '~/components/Loader'
import Loading from '~/components/Loading'
import RequestError from '~/components/RequestError'
import ReturnButton from '~/components/ReturnButton'
import { useProductLoader } from '~/features/store/store.loader'
import { ROUTES } from '~/routes/pages-routes'

const ProductDetails = () => {
  const { product } = useProductLoader()
  const { data } = product
  const [mainImage, setMainImage] = useState(data.images[0])

  const handleOnClick = (image: string) => {
    setMainImage(image)
  }

  return (
    <main className="inset-x-0 bottom-0 pt-16">
      <ReturnButton path={ROUTES.STORE.HOME} />
      <Loader resolve={data} loading={<Loading />} error={<RequestError />}>
        {(data) => (
          <section>
            <div className="flex flex-col">
              <h1 className="py-6 text-center text-2xl font-semibold">
                {data.title}
              </h1>
              <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
                <img src={mainImage} alt="" className="h-80 w-80 rounded-2xl" />
                <section className="flex flex-row gap-4 lg:flex-col">
                  {data.images.map((image) => (
                    <button key={image} onClick={() => handleOnClick(image)}>
                      <img
                        src={image}
                        alt=""
                        className={
                          image === mainImage
                            ? 'h-24 w-24 rounded-2xl border-2 border-eco_green'
                            : 'h-24 w-24 rounded-2xl hover:border-2 hover:border-eco_green'
                        }
                      />
                    </button>
                  ))}
                </section>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-20 lg:flex-row lg:items-start">
              <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start">
                <span className="px-4 font-semibold">Descrição:</span>
                <span className="text-justify">{data.description}</span>
              </div>
              <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start">
                <span className="px-4 font-semibold">Preço:</span>
                <span>R${data.price}</span>
              </div>
            </div>
          </section>
        )}
      </Loader>
    </main>
  )
}

export default ProductDetails

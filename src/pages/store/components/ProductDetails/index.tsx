import Loader from '~/components/Loader'
import { useProductLoader } from '~/features/store/store.loader'

const ProductDetails = () => {
  const { product } = useProductLoader()
  const { data } = product
  return (
    <main>
      <Loader
        resolve={data}
        loading={<h1>ja faço</h1>}
        error={<h1>ja faço</h1>}
      >
        {(data) => (
          <section>
            <div className="flex flex-col">
              <h1 className="py-6 text-center text-2xl font-semibold">
                {data.title}
              </h1>
              <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
                <img
                  src={data.mainImage}
                  alt=""
                  className="h-80 w-80 rounded-2xl"
                />
                <section className="flex flex-row gap-4 lg:flex-col">
                  {data.images.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt=""
                      className="h-24 w-24 rounded-2xl"
                    />
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
                <span className="">R${data.price}</span>
              </div>
            </div>
          </section>
        )}
      </Loader>
    </main>
  )
}

export default ProductDetails

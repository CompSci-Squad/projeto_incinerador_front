import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../routes/pages-routes'

interface StoreCardProps {
  id: string
  title: string
  images: Array<string>
  price: string
  description: string
}

const StoreCard: React.FC<StoreCardProps> = ({
  id,
  description,
  images,
  price,
  title,
}) => {
  return (
    <div key={id} className="card m-4 shadow-xl">
      <figure>
        <img
          src={images[0]}
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
  )
}

export default StoreCard

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
    <div key={id} className="card card-compact m-4 gap-2 py-4 shadow-xl">
      <figure>
        <img
          src={images[0]}
          loading="eager"
          alt={`imagem do produto ${title}`}
          className="h-24 w-24 rounded-2xl md:h-52 md:w-52"
        />
      </figure>
      <div className="flex flex-col items-center justify-center md:card-body md:gap-4">
        <h3 className="card-title">{title}</h3>
        <span className="text-left">{description}</span>
        <span>{`R$${price}`}</span>
        <div className="card-actions md:justify-end">
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

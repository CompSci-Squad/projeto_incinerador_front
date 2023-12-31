import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../../../routes/pages-routes'

interface EventCardProps {
  id: string
  title: string
  image: string
  description: string
  date: Date
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  description,
  image,
  title,
  date,
}) => {
  const day = dayjs(date).format('DD/MM/YYYY')
  const time = dayjs(date).format('HH:mm')
  return (
    <div key={id} className="card card-compact m-4 gap-2 py-4 shadow-xl">
      <figure>
        <img
          src={image}
          loading="eager"
          alt={`imagem do produto ${title}`}
          className="h-52 w-52 rounded-2xl"
        />
      </figure>
      <div className="flex flex-col items-center justify-center md:card-body md:gap-4">
        <h3 className="card-title">{title}</h3>
        <div className="flex gap-2">
          <span className="font-semibold">Descrição:</span>
          <span className="basis-full">{description}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">Data:</span>
          <span className="basis-full">
            {day} {time}
          </span>
        </div>
        <div className="justify-end md:card-actions">
          <Link
            to={ROUTES.EVENTS.DETAILS(id)}
            className="btn bg-eco_green text-eco_white hover:bg-eco_green_hover"
          >
            Saiba Mais
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EventCard

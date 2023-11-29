import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'

type NewsCardProps = {
  link: string
  description: React.ReactNode
  image?: string
  alt?: string
  date?: Date
}

const NewsCard: React.FC<NewsCardProps> = ({ link, description, date }) => {
  const day = date
    ? dayjs(date).format('DD/MM/YYYY')
    : dayjs(faker.date.past()).format('DD/MM/YYYY')
  return (
    <li className="m-4 flex flex-col items-center justify-center gap-2 rounded-2xl border-b-2 border-eco_green py-4 shadow-xl">
      {description}
      <div className="flex gap-2">
        <span className="font-bold">Publicado em:</span>
        <span>{day}</span>
      </div>
      <a
        href={link}
        target="_blank"
        className="btn bg-eco_green text-white hover:bg-eco_green_hover"
      >
        Saiba mais
      </a>
    </li>
  )
}

export default NewsCard

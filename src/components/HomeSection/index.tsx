import { Link } from 'react-router-dom'

import { ROUTES } from '~/routes/pages-routes'

type HomeSectionProps = {
  title: string
  image: string
  text: string
  path: ROUTES
}

const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  image,
  text,
  path,
}) => {
  return (
    <Link
      to={path}
      className="hover card w-96 shadow-xl transition delay-100 ease-in-out hover:bg-gray-300"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title leading-3">{title}</h2>
        <figure className="px-10 pt-4">
          <img src={image} className="rounded-xl" />
        </figure>
        <p>{text}</p>
      </div>
    </Link>
  )
}

export default HomeSection

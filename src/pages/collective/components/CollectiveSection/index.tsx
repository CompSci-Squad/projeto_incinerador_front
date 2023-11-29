import { Link } from 'react-router-dom'

type CollectiveSectionProps = {
  title: string
  image: string
  children: React.ReactNode
  path: string
}

const CollectiveSection: React.FC<CollectiveSectionProps> = ({
  title,
  image,
  children,
  path,
}) => {
  return (
    <Link
      to={path}
      className="hover card shadow-xl transition delay-100 ease-in-out hover:bg-gray-300"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title leading-3">{title}</h2>
        <figure className="px-10 pt-4">
          <img src={image} className="h-24 w-24 rounded-2xl md:h-60 md:w-60" />
        </figure>
        {children}
      </div>
    </Link>
  )
}

export default CollectiveSection

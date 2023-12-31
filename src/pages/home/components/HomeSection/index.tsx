import { Link } from 'react-router-dom'

type HomeSectionProps = {
  title: string
  image: string
  path: string
  children: React.ReactNode
}

const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  image,
  path,
  children,
}) => {
  const addImageFallback = (event: { currentTarget: { src: string } }) => {
    event.currentTarget.src = '/images/cachorro_arabe.jpeg'
  }
  return (
    <div className="flex justify-center">
      <Link
        to={path}
        className="hover card card-compact shadow-xl transition delay-100 ease-in-out md:card-normal hover:bg-gray-300"
      >
        <div className="card-body items-center text-center">
          <h2 className="card-title leading-3">{title}</h2>
          <figure className="px-10 py-4">
            <img
              src={image}
              className="h-16 w-16 rounded-xl md:h-40 md:w-40"
              onError={addImageFallback}
            />
          </figure>
          {children}
        </div>
      </Link>
    </div>
  )
}

export default HomeSection

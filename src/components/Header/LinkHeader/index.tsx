import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type LinkHeaderProps = {
  title: string
  path: string
}

const LinkHeader: React.FC<LinkHeaderProps> = ({ path, title }) => {
  const location = useLocation()

  console.log(location)
  console.log(path)
  return (
    <Link
      to={path}
      className={twMerge(
        `btn
          btn-xs
          rounded-full
          border-none
        ${
          location.pathname === path
            ? 'bg-eco_blue text-eco_white hover:bg-sky-700'
            : 'bg-eco_white hover:bg-gray-300'
        }`,
      )}
    >
      {title}
    </Link>
  )
}

export default LinkHeader

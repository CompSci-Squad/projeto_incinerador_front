import { Link, useLocation } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

export type LinkHeaderProps = {
  title: string
  path: string
}

const LinkHeader: React.FC<LinkHeaderProps> = ({ path, title }) => {
  const location = useLocation()

  return (
    <li
      className={twMerge(
        `
        rounded-xl
        border-none
        my-4
        md:my-0
        md:ml-8
        text-center
        py-1
        px-2
        text-sm
        md:text-base
      ${
        location.pathname.includes(path)
          ? 'bg-eco_blue text-eco_white hover:bg-sky-700'
          : 'bg-eco_white hover:bg-gray-300'
      }`,
      )}
    >
      <Link to={path}>{title}</Link>
    </li>
  )
}

export default LinkHeader

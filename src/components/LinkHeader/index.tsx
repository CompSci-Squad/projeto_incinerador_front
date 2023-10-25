import { Link, useLocation } from 'react-router-dom'

type LinkHeaderProps = {
  title: string
  path: string
}

const LinkHeader: React.FC<LinkHeaderProps> = ({ path, title }) => {
  const location = useLocation()

  return (
    <Link
      to={path}
      className={location.pathname === path ? 'btn btn-sm' : 'btn btn-primary'}
    >
      {title}
    </Link>
  )
}

export default LinkHeader

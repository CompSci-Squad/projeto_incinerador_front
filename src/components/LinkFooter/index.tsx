import { Link } from 'react-router-dom'

type LinkFooterProps = {
  path: string
  title: string
}

const LinkFooter: React.FC<LinkFooterProps> = ({ path, title }) => {
  return (
    <Link to={path} className="font-bold">
      {title}
    </Link>
  )
}

export default LinkFooter

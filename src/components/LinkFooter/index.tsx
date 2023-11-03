import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type LinkFooterProps = {
  path: string
  title: string
  styles?: string
}

const LinkFooter: React.FC<LinkFooterProps> = ({ path, title, styles }) => {
  return (
    <Link to={path} className={twMerge(`font-bold`, styles)}>
      {title}
    </Link>
  )
}

export default LinkFooter

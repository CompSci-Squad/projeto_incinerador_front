import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

interface ReturnButtonProps {
  path: string
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ path }) => {
  return (
    <div className="flex p-6">
      <Link to={path} className="rounded-full bg-eco_green p-4">
        <IoIosArrowBack className=" text-lg text-eco_white" />
      </Link>
    </div>
  )
}

export default ReturnButton

import { useNavigateParams } from '~/hooks/useNavigateParams'

type PaginationProps = {
  pageNumber: number
  isActive: boolean
}

const PaginationButton: React.FC<PaginationProps> = ({
  pageNumber,
  isActive,
}) => {
  const navigate = useNavigateParams()
  return (
    <button
      className={
        isActive
          ? 'hover btn join-item bg-eco_green text-white hover:bg-eco_green_hover'
          : 'hover btn join-item hover:bg-eco_green'
      }
      onClick={() => navigate({ page: pageNumber })}
    >
      {pageNumber}
    </button>
  )
}

export default PaginationButton

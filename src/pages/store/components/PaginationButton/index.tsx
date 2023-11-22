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
        isActive === true
          ? 'btn join-item bg-eco_green'
          : 'hover btn join-item hover:bg-eco_green'
      }
      onClick={() => navigate({ page: pageNumber })}
    >
      {pageNumber}
    </button>
  )
}

export default PaginationButton

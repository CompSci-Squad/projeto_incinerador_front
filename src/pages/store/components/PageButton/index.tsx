type PaginationProps = {
  pageNumber: number
  isActive: boolean
}

const PaginationButton: React.FC<PaginationProps> = ({
  pageNumber,
  isActive,
}) => {
  return (
    <button
      className={
        isActive === true
          ? 'hover btn join-item btn-xs hover:bg-eco_green'
          : 'btn join-item bg-eco_green'
      }
    >
      {pageNumber}
    </button>
  )
}

export default PaginationButton

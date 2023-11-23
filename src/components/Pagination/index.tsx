import PaginationButton from './PaginationButton'

type PaginationProps = {
  page: number
  totalPages: number
}

const Pagination = ({ totalPages, page }: PaginationProps) => {
  const arr = Array.from({ length: totalPages }, (_, index) => index + 1)
  return (
    <div className="join">
      {arr.map((_, index) => (
        <PaginationButton
          isActive={index + 1 === page}
          pageNumber={index + 1}
          key={index + 1}
        />
      ))}
    </div>
  )
}

export default Pagination

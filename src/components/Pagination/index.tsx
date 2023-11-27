import { useNavigateParams } from '~/hooks/useNavigateParams'

import PaginationButton from './PaginationButton'
import PaginationNavButton from './PaginationNavButton'

type PaginationProps = {
  page: number
  totalPages: number
}

const Pagination = ({ totalPages, page }: PaginationProps) => {
  const navigate = useNavigateParams()
  const arr = Array.from({ length: totalPages }, (_, index) => index + 1)
  const handlePageChange = (newPage: number) => {
    navigate({ page: newPage })
  }
  return window.innerWidth >= 786 ? (
    <section className="join flex items-center justify-center">
      <PaginationNavButton
        direction="back"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      />
      <div>
        {arr.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            isActive={pageNumber === page}
            pageNumber={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          />
        ))}
      </div>
      <PaginationNavButton
        direction="next"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      />
    </section>
  ) : (
    <section className="join flex items-center justify-center pb-4">
      <PaginationNavButton
        direction="back"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      />
      <span className="btn join-item hover:bg-eco_green">{page}</span>
      <PaginationNavButton
        direction="next"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      />
    </section>
  )
}

export default Pagination

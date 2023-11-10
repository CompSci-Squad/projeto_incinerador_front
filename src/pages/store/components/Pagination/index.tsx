import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import PaginationButton from '../PageButton'

type PaginationProps = {
  page: number
  totalPages: number
  nextPage: number
  prevPage: number
  hasNextPage: boolean
}

const Pagination = ({
  page,
  totalPages,
  nextPage,
  prevPage,
  hasNextPage,
}: PaginationProps) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, index) => index + start)
  }

  const totalPagesList: number[] | undefined = useMemo(() => {
    const showPrevButtons = prevPage > 2
    const showNextButtons = nextPage >= 2

    if (page === totalPages) {
      const rightRange = range(totalPages - 5 + 1, totalPages)
      return [...rightRange]
    }

    if (!showPrevButtons && showNextButtons) {
      const end = totalPages >= 5 ? 5 : totalPages
      const leftRange = range(1, end)
      return [...leftRange]
    }

    if (showPrevButtons && !showNextButtons) {
      const rightRange = range(totalPages - 5 + 1, totalPages)
      return [...rightRange]
    }

    if (showPrevButtons && showNextButtons) {
      const end = totalPages >= nextPage + 2 ? nextPage + 1 : nextPage
      const middleRange = range(prevPage - 1, end)
      return [...middleRange]
    }
  }, [totalPages, page])

  return (
    <div className="join">
      {totalPagesList
        ?.filter((n) => n > 0)
        ?.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            pageNumber={page}
            isActive={pageNumber === page}
          />
        ))}
    </div>
  )
}

export default Pagination

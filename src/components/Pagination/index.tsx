import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { useNavigateParams } from '~/hooks/useNavigateParams'

import PaginationButton from './PaginationButton'

type PaginationProps = {
  page: number
  totalPages: number
}

const Pagination = ({ totalPages, page }: PaginationProps) => {
  const navigate = useNavigateParams()
  const arr = Array.from({ length: totalPages }, (_, index) => index + 1)
  return (
    <section className="join flex items-center justify-center pb-4">
      {page !== 1 ? (
        <button
          className="hover btn join-item bg-eco_green hover:bg-eco_green_hover"
          onClick={() => navigate({ page: page - 1 })}
        >
          <IoIosArrowBack className="text-white" />
        </button>
      ) : (
        ''
      )}
      <div>
        {arr.map((_, index) => (
          <PaginationButton
            isActive={index + 1 === page}
            pageNumber={index + 1}
            key={index + 1}
          />
        ))}
      </div>
      {page !== 8 ? (
        <button
          className="hover btn join-item bg-eco_green hover:bg-eco_green_hover"
          onClick={() => navigate({ page: page + 1 })}
        >
          <IoIosArrowForward className="text-white" />
        </button>
      ) : (
        ''
      )}
    </section>
  )
}

export default Pagination

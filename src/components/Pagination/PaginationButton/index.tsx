import { forwardRef } from 'react'

interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pageNumber: number
  isActive: boolean
}

const PaginationButton = forwardRef<HTMLButtonElement, PaginationButtonProps>(
  ({ pageNumber, isActive, onClick }) => {
    return (
      <button
        className={
          isActive
            ? 'hover btn join-item bg-eco_green text-white hover:bg-eco_green_hover'
            : 'hover btn join-item hover:bg-eco_green'
        }
        onClick={onClick}
      >
        {pageNumber}
      </button>
    )
  },
)

export default PaginationButton

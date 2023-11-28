import { forwardRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface PaginationNavButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'back' | 'next'
}

const PaginationNavButton = forwardRef<
  HTMLButtonElement,
  PaginationNavButtonProps
>(({ onClick, disabled, direction }) => {
  return (
    <button
      className={`hover btn join-item bg-eco_green hover:bg-eco_green_hover ${
        disabled ? 'disabled' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === 'back' ? (
        <IoIosArrowBack className="text-white" />
      ) : (
        <IoIosArrowForward className="text-white" />
      )}
    </button>
  )
})

export default PaginationNavButton

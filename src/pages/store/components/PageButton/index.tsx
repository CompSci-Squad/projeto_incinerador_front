type PaginationProps = {
  number: string
}

const PaginationButton: React.FC<PaginationProps> = ({ number }) => {
  return (
    <button className="hover btn join-item btn-xs hover:bg-eco_green">
      {number}
    </button>
  )
}

export default PaginationButton

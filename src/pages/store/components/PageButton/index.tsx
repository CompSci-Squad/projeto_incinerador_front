type PaginationProps = {
  number: string
}

const PaginationButton: React.FC<PaginationProps> = ({ number }) => {
    
  return <button className="join-item btn">{number}</button>
}

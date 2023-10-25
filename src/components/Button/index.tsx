import { useNavigate } from 'react-router-dom'

type ButtonProps = {
  navigateTo: string
  children: React.ReactNode
}

const Button = ({ children, navigateTo }: ButtonProps) => {
  const navigate = useNavigate()
  return (
    <button className="btn btn-sm" onClick={() => navigate(navigateTo)}>
      {children}
    </button>
  )
}

export default Button

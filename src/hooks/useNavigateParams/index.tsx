import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

export const useNavigateParams = () => {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const limit = searchParams.get('limit') || '8'
  const page = searchParams.get('page') || '1'

  return (path: string, params?: any) => {
    navigate({
      pathname: path,
      search: createSearchParams({ limit, page, ...params }).toString(),
    })
  }
}

import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

export const useNavigateParams = () => {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const _limit = searchParams.get('limit') || '8'
  const _page = searchParams.get('page') || '1'

  return (params: any) => {
    navigate({
      search: createSearchParams({ _limit, _page, ...params }).toString(),
    })
  }
}

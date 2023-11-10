import Loader from '~/components/Loader'
import Loading from '~/components/Loading'
import RequestError from '~/components/RequestError'
import ReturnButton from '~/components/ReturnButton'
import { useEventLoader } from '~/features/events/event.loader'

import { ROUTES } from '../../../../routes/pages-routes'

const EventDetail = () => {
  const { event } = useEventLoader()
  const { data } = event
  return (
    <main>
      <ReturnButton path={ROUTES.EVENTS.HOME} />
      <Loader
        resolve={data}
        loading={<Loading />}
        error={<RequestError />}
      >
        {(data) => (
            
        )}
      </Loader>
    </main>
  )
}

export default EventDetail

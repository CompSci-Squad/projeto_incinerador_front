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
      <Loader resolve={data} loading={<Loading />} error={<RequestError />}>
        {(data) => (
          <div className="flex flex-col lg:flex-row">
            <img src={data.image} alt="" />
          </div>
        )}
      </Loader>
    </main>
  )
}

export default EventDetail

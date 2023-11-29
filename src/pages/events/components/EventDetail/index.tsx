import dayjs from 'dayjs'

import Loader from '~/components/Loader'
import Loading from '~/components/Loading'
import RequestError from '~/components/RequestError'
import ReturnButton from '~/components/ReturnButton'
import { useEventLoader } from '~/features/events/event.loader'

import { ROUTES } from '../../../../routes/pages-routes'

const EventDetail = () => {
  const { event } = useEventLoader()
  const { data } = event

  const day = dayjs(data.date).format('DD/MM/YYYY')
  const time = dayjs(data.date).format('HH:mm')
  return (
    <main className="h-screen pt-16">
      <ReturnButton path={ROUTES.EVENTS.HOME} />
      <Loader resolve={data} loading={<Loading />} error={<RequestError />}>
        {(data) => (
          <div className="flex flex-col justify-evenly gap-2 pb-8 pt-6 md:flex-row">
            <div className="flex items-center justify-center">
              <img src={data.image} alt="" className="h-80 w-80 rounded-2xl" />
            </div>
            <div className="m-6 flex flex-col justify-evenly gap-4 rounded-2xl bg-white p-6">
              <section className="flex gap-2 rounded-md border-b-2 border-eco_green">
                <span className="font-bold">Nome do evento:</span>
                <span>{data.title}</span>
              </section>
              <section className="flex gap-2 rounded-md border-b-2 border-eco_green">
                <span className="font-bold">Descrição:</span>
                <span>{data.description}</span>
              </section>
              <section className="flex gap-2 rounded-md border-b-2 border-eco_green">
                <span className="font-bold">Data e hora:</span>
                <span>
                  {time} {day}
                </span>
              </section>
              <section className="flex gap-2 rounded-md border-b-2 border-eco_green">
                <span className="font-bold">Localização:</span>
                <span>
                  {data.location.street} {data.location.number} (
                  {data.location.postalCode})
                </span>
              </section>
            </div>
          </div>
        )}
      </Loader>
    </main>
  )
}

export default EventDetail

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
    <main className="h-screen">
      <ReturnButton path={ROUTES.EVENTS.HOME} />
      <Loader resolve={data} loading={<Loading />} error={<RequestError />}>
        {(data) => (
          <div className="flex  flex-col justify-evenly pb-8 pt-6 lg:flex-row">
            <img src={data.image} alt="" className="rounded-2xl" />
            <div className="flex flex-row justify-evenly rounded-2xl bg-white p-6 lg:flex-col ">
              <section className="flex gap-2">
                <span className="rounded-md border-b-2 border-eco_green font-bold">
                  Nome do evento:
                </span>
                <span>{data.title}</span>
              </section>
              <section className="flex gap-2">
                <span className="rounded-md border-b-2 border-eco_green font-bold">
                  Descrição do evento:
                </span>
                <span>{data.description}</span>
              </section>
              <section className="flex gap-2">
                <span className="rounded-md border-b-2 border-eco_green font-bold">
                  Data e hora:
                </span>
                <span>
                  {time} {day}
                </span>
              </section>
              <section className="flex gap-2">
                <span className="rounded-md border-b-2 border-eco_green font-bold">
                  Localização
                </span>
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

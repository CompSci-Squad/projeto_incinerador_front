import { useSearchParams } from 'react-router-dom'

import Loader from '~/components/Loader'
import ReturnButton from '~/components/ReturnButton'
import { useEventsLoader } from '~/features/events/event.loader'

import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'
import RequestError from '../../components/RequestError'
import { ROUTES } from '../../routes/pages-routes'
import EventCard from './components/EventCard'
import EventContent, {
  frontmatter as eventFrontmatter,
} from './content/eventSection.mdx'

const Events = () => {
  const [searchParams] = useSearchParams()
  const { events } = useEventsLoader()
  const { data } = events
  const page = Number(searchParams.get('page'))
  return (
    <main>
      <ReturnButton path={ROUTES.HOME} />
      <h1 className="py-10 text-center text-4xl font-bold">Eventos</h1>
      <section className="flex items-center justify-center gap-10 py-10">
        <img src={eventFrontmatter.image} alt="" className="rounded-2xl" />
        <EventContent />
      </section>
      <Loader resolve={data} loading={<Loading />} error={<RequestError />}>
        {(data) => (
          <section className="grid grid-cols-4 grid-rows-2 gap-4 p-6">
            {data.map(({ id, date, description, image, title }) => (
              <EventCard
                key={id}
                id={id}
                date={date}
                description={description}
                image={image}
                title={title}
              />
            ))}
          </section>
        )}
      </Loader>
      <section className="flex items-center justify-center pb-4">
        <Pagination page={page} totalPages={8} />
      </section>
    </main>
  )
}

export default Events

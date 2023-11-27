import Loader from '~/components/Loader'
import ReturnButton from '~/components/ReturnButton'
import { useEventsLoader } from '~/features/events/event.loader'

import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'
import RequestError from '../../components/RequestError'
import { ROUTES } from '../../routes/pages-routes'
import { parseLinkHeader } from '../../utils/headerParser'
import EventCard from './components/EventCard'
import EventContent, {
  frontmatter as eventFrontmatter,
} from './content/eventSection.mdx'

const Events = () => {
  const { events } = useEventsLoader()
  const { data, headers } = events
  const { current, last } = parseLinkHeader(headers['link'])
  return (
    <main className="inset-x-0 bottom-0 pt-16">
      <ReturnButton path={ROUTES.HOME} />
      <h1 className="py-10 text-center text-4xl font-bold">Eventos</h1>
      <section className="flex flex-col items-center justify-center gap-2 py-4 md:flex-row md:px-6 md:py-10">
        <img
          src={eventFrontmatter.image}
          alt=""
          className="h-28 w-28 rounded-2xl md:h-52 md:w-52"
        />
        <div className=" flex h-64 w-64 items-center justify-center md:pl-6">
          <EventContent />
        </div>
      </section>
      <Loader resolve={data} loading={<Loading />} error={<RequestError />}>
        {(data) => (
          <section className="rounded-2xl bg-white md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 md:p-6">
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
        <Pagination page={current} totalPages={last} />
      </section>
    </main>
  )
}

export default Events

import { defer, LoaderFunctionArgs, useLoaderData } from 'react-router-dom'

import { EventLoader, EventsLoader } from '~/interfaces/events/event.interface'
import { eventsList, getEvent } from '~/services/endpoints/events'

export const eventsLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url)

  const limit = url.searchParams.get('limit')
  const page = url.searchParams.get('page')

  const queryParams = {
    _page: page || 1,
    _limit: limit || 8,
  }
  const events = await eventsList({ params: queryParams })
  return defer({ events })
}

export const useEventsLoader = () => {
  return useLoaderData() as EventsLoader
}

export const eventLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params

  const event = await getEvent(id as string)

  return defer({ event })
}

export const useEventLoader = () => {
  return useLoaderData() as EventLoader
}

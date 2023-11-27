import { Event } from '../../interfaces/events/event.interface'
import HttpService from '../http'
import { endpoint } from './endpoints'

export const eventsList = async ({ params }: any) => {
  return await HttpService.get<Array<Event>>({
    url: endpoint.EVENTS.LIST(),
    params,
  })
}

export const getEvent = async (id: string) => {
  return await HttpService.get<Event>({
    url: endpoint.EVENTS.ONE(id),
  })
}

import { AxiosResponse } from 'axios'

export interface EventsLoader {
  events: AxiosResponse<Array<Event>>
}

export interface EventLoader {
  event: AxiosResponse<Event>
}

export interface Event {
  id: string
  title: string
  description: string
  image: string
  location: {
    number: string
    street: string
    postalCode: string
  }
  date: Date
}

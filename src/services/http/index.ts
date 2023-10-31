import axios from 'axios'

interface RequestNoData {
  url: string
  params?: any
}

interface RequestWithData<Data> extends RequestNoData {
  data: Data
}

export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  },
})

export class HttpService {
  public async get<Response>({ url }: RequestNoData) {
    const response = await instance.get<Response>(url)

    return response
  }
  public async post<Response, Data>({ url, data }: RequestWithData<Data>) {
    return await instance.post<Response>(url, data)
  }
  public async patch<Response, Data>({ url, data }: RequestWithData<Data>) {
    return await instance.patch<Response>(url, data)
  }
  public async delete<Response>({ url }: RequestNoData) {
    return await instance.delete<Response>(url)
  }
}

export default new HttpService()

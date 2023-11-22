type ParsedLinkHeader = {
  prev: number
  next: number
  limit: number
  first: number
  current: number
}

export const parseLinkHeader = (linkHeader: string, current: string) => {
  const obj = Object.fromEntries(
    linkHeader
      .split(', ')
      .map((header) => header.split('; '))
      .map((header) => {
        const url = new URL(header[0].slice(1, -1))

        return [
          header[1].replace(/"/g, '').replace('rel=', ''),
          url.searchParams.get('_page'),
        ]
      }),
  )

  const transformedObject = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, Number(value)]),
  )
  transformedObject['current'] = Number(current)
  return obj as unknown as ParsedLinkHeader
}

type ParsedLinkHeader = {
  prev: number
  next: number
  last: number
  first: number
  current: number
}

export const parseLinkHeader = (linkHeader: string) => {
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
  transformedObject['current'] =
    obj.next === undefined ? Number(obj.last) : Number(Number(obj.next) - 1)
  return transformedObject as unknown as ParsedLinkHeader
}

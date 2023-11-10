export const endpoint = {
  PRODUCT: {
    LIST: () => '/products',
    ONE: (id: string) => `/products/${id}`,
  },
  EVENTS: {
    LIST: () => '/events',
    ONE: (id: string) => `/events/${id}`,
  },
}

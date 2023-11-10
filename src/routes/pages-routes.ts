export const ROUTES = {
  HOME: '/',
  COLLECTIVE: {
    HOME: '/collective',
    PROPOSALS: '/collective/proposals',
    ORIGIN: '/collective/origin',
  },
  ABOUT: '/about',
  CONTACT: '/contact',
  CONTRIBUTE: '/contribute',
  EVENTS: '/events',
  HISTORY: '/history',
  STORE: {
    HOME: '/store',
    DETAILS: (id: string) => `/store/details/${id}`,
  },
  NEWS: '/news',
  ABOUTUS: '/about-us',
}

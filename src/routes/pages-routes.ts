export const ROUTES = {
  HOME: '/',
  COLLECTIVE: '/collective',
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
  COLLECTIVES1: '/collective-s1',
  COLLECTIVES2: '/collective-s2',
}

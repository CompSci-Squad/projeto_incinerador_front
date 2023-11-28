export const ROUTES = {
  HOME: '/',
  COLLECTIVE: {
    HOME: '/collective',
    IDEAS: '/collective/proposals',
    GROW: '/collective/origin',
  },
  CONTACT: '/contact',
  CONTRIBUTE: '/contribute',
  PARTNERS: '/partners',
  EVENTS: {
    HOME: '/events',
    DETAILS: (id: string) => `/events/details/${id}`,
  },
  HISTORY: {
    HOME: '/history',
    INCINERATOR: '/history/incinerator',
    OCCUPATION: '/history/occupation',
  },
  STORE: {
    HOME: '/store',
    DETAILS: (id: string) => `/store/details/${id}`,
  },
  NEWS: '/news',
  ABOUTUS: '/about-us',
}

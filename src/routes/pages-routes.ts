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
  PARTNERS: '/partners',
  EVENTS: {
    HOME: '/events',
    DETAILS: (id: string) => `/events/details/${id}`,
  },
  HISTORY: {
    HOME: '/history',
    SECTION1: '/history/section1',
    SECTION2: '/history/section2',
  },
  STORE: {
    HOME: '/store',
    DETAILS: (id: string) => `/store/details/${id}`,
  },
  NEWS: '/news',
  ABOUTUS: '/about-us',
}

// eslint-disable-next-line camelcase
import { Roboto, Baloo_2 } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--roboto',
})

const baloo2 = Baloo_2({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--baloo2',
})

export const theme = {
  colors: {
    white: '#FFFFFF',
    'white-50': '#FAFAFA',

    'gray-50': '#F3F3F2',
    'gray-100': '#EDEDED',
    'gray-150': '#E6E5E5',
    'gray-200': '#D7D5D5',

    'brown-200': '#8D8686',
    'brown-300': '#574F4D',
    'brown-400': '#403937',
    'brown-500': '#272221',

    'purple-50': '#EBE5F9',
    'purple-200': '#8047F8',
    'purple-400': '#4B2995',

    'yellow-50': '#F1E9C9',
    'yellow-400': '#DBAC2C',
    'yellow-600': '#C47F17',
  },
  typography: {
    fontFamily: {
      roboto: roboto.variable,
      baloo2: baloo2.variable,
    },
  },
} as const

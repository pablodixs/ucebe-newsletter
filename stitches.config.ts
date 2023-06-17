import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      blue500: '#0042DF',
      green500: '#8ADF00',
      gray100: '#F5F5F5',
      gray300: '#F3F3F3',
      gray400: '#828282',
      gray500: '#565656',
      black: '#1E1E1E',
      white: '#FFFFFF',
    },
    fontSizes: {
      small: '0.875rem',
      regular: '1rem',
      medium: '1.125rem',
      large: '1.5rem',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
})

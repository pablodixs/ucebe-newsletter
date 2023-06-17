import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  'button, input, select, textarea': {
    fontSize: 'inherit',
    fontFamily: 'inherit',
  },

  body: {
    backgroundColor: '$blue500',
    color: '$black',
    textRendering: 'geometricPrecision',
    '-webkit-font-smoothing': 'antialiased',
  },
})
